import React,{ useState } from 'react';
import { useSelector } from  'react-redux';
import axios from 'axios'


import Selector from "./Selector";
import Hyperparams from './Hyperparams';

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
                        {name:"C",type:"num",data:[0,100,0.5]},
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
    let [trainopt,trainState] = useState({
            label:"",
            algo:{}
        })

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
                algo.hyperparams[temp.name] = temp.default
            }
            else{
                algo.hyperparams[temp.name] = temp.data[2]
            }
        }

        trainState({
            label:trainopt.label,
            algo:algo
        })

        console.log(trainopt)
    }

    const selectLabel = (x) => {
            trainState({
                    label:JSON.parse(x),
                    algo:trainopt.algo
                });
        }  
    
    async function train(){
        await axios({
            method:"POST",
            url:"http://localhost:8080/train"
        })
    }
    
    const tuneparam = (p,v) =>{
        console.log(trainopt)
    }

    let tuneParam = (p,v) => tuneparam(p,v)

    const Train = () =>{
        console.log(trainopt)
    }

    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col"  >
                            <Selector data={ columns } title={"Label"} type onchange={selectLabel} />
                            <Selector data={ models } title={"Algorithm"} type onchange={selectAlgo} />
                            <div className="selector-row-hyperparams">
                                <div className="selector-label-hyperparams flex-center">
                                    Hyper Params
                                </div>
                                <div className="selector-hyperparams flex-center flex-column">
                                    {hyper}
                                </div>
                            </div>
                            <div className="selector-btn" onClick={Train} >
                                Train
                            </div>
                        </div>
                        <div className="overview-col">
                            <div className="table-cont">
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