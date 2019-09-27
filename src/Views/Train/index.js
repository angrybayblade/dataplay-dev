import React,{ useState } from 'react';
import { useSelector } from  'react-redux';
import axios from 'axios'


import Selector from "./Selector";
import Hyperparams from './Hyperparams';
import Features from './Selector/Features'

const models = [
                {
                    name:"Linear Regression",
                    url:'/train/regression/linear',
                    hyper_params:[
                            {name:"fit_intercept",type:"bool",default:true},
                            {name:"normalize",type:"bool",default:false},
                            {name:"n_jobs",type:"num",data:[0,10,1]},
                            {name:"cat_test",type:"cat",data:["a","b","c"]}
                    ],
                    type:"ml/supervised/regression",
                    par:"regression",
                },
                {
                    name:'SVR',
                    url:'/train/regression/svr',
                    hyper_params:[
                        {name:"C",type:"num",data:[0,100,0.1]},
                        {name:"gamma",type:"num",data:[0.1,10,0.1]},
                        {name:"kernel",type:"cat",data:['rbf','linear','poly','sigmoid', 'precomputed']},
                    ],
                    type:"ml/supervised/regression",
                    par:"regression"
                },
            ]

const Train = (props) =>{
    let algo;
    let [hyper,hyperState] = React.useState(<Hyperparams data={[]} />)
    let columns = useSelector(state => state.columns),i,j;
    window.features = []

    const selectAlgo = (x) => {
        let temp;
        
        hyperState(
                <Hyperparams 
                    data={JSON.parse(x).hyper_params} 
                    tuneParam={tuneParam} 
                />
            )

        algo = JSON.parse(x)
        algo.hyperparams = {}
        
        for (i in algo.hyper_params){
            temp = algo.hyper_params[i]
            if (temp.type === "bool"){
                algo.hyperparams[temp.name] = Number(temp.default)
            }
            else{
                algo.hyperparams[temp.name] = temp.data[2]
            }
        }

        window.trainopt = algo
    }

    const selectLabel = (x) => {
            window.label = JSON.parse(x)
        }  
    
    async function Train(){
        await axios({
            method:"POST",
            url:"http://localhost:8080/train",
            data:{
                traindata:window.trainopt,
                label:window.label,
                features:window.features
            }
        }).then(response =>{
            console.log(response.data)
        })
    }
    
    let tuneParam = (p,v) => {
        window.trainopt.hyperparams[p] = v
        // console.log(window.trainopt.hyperparams[p])
    }

    const selectFeature = (v,n) =>{
        if (v.checked === false){
            window.features.push(n)
            // console.log(window.features)
        }
        else{
            window.features = window.features.filter((e,i)=>{
                if (e !== n){
                    return e
                }
            })
            // console.log(window.features)
        }
    }

    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col"  style={{margin:"0px 0px 0px 50px"}}>
                            <Selector data={ columns } title={"Label"} type onchange={selectLabel} />
                            <div className="selector-row-features" style={{height:"auto !important"}} >
                                <div className="selector-label-hyperparams flex-center">
                                    Features
                                </div>
                                <div className="selector-features flex-center flex-column">
                                    <Features columns={columns} selectFeature={selectFeature} />
                                </div>
                            </div>
                        </div>

                        <div className="selector-col"  style={{margin:"0px 0px 0px 50px"}}>
                            <Selector data={ models } title={"Algorithm"} type onchange={selectAlgo} />
                            <div className="selector-row-hyperparams">
                                <div className="selector-label-hyperparams flex-center">
                                    Hyper Params
                                </div>
                                <div className="selector-hyperparams flex-center flex-column">
                                    {hyper}
                                </div>
                            </div>
                            <div className="selector-btn" style={{marginBottom:"25px"}} onClick={Train} >
                                Train
                            </div>
                        </div>

                        <div className="overview-col">
                            <div className="table-cont" style={{margin:"50px 50px"}}>
                                MSE/Confusion Matrix
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Train;