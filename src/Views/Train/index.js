import React,{ useState } from 'react';
import { useSelector } from  'react-redux';
import axios from 'axios'


import Selector from "./Selector";
import Hyperparams from './Hyperparams';
import Features from './Selector/Features'
import Evaluation from './Evaluation';
import createNotification from '../Noftification';

const models = [
                {
                    name:"LinearRegression",
                    package:'sklearn.linear_model',
                    hyper_params:[
                            {name:"fit_intercept",type:"bool",default:true},
                            {name:"normalize",type:"bool",default:false},
                            {name:"n_jobs",type:"num",data:[-1,8,1,2]},
                    ],
                    type:"regression",
                },
                {
                    name:'LogisticRegression',
                    package:'sklearn.linear_model',
                    hyper_params:[
                        {name:"penalty",type:'cat',data:['l2','l1','elasticnet','none']},
                        {name:"C",type:'num',data:[0,1,0.01,1]},
                        {name:"fit_intercept",type:"bool",default:true},
                        {name:"solver",type:"cat",data:['liblinear','newton-cg', 'lbfgs',  'sag', 'saga']},
                        {name:"l1_ratio",type:'num',data:[0,1,0.01,0]}
                    ],
                    type:"classification"
                },
                {
                    name:'ElasticNet',
                    package:'sklearn.linear_model',
                    hyper_params:[
                        {name:"alpha",type:'num',data:[0,1,0.01,1]},
                        {name:"normalize",type:"bool",default:false},
                        {name:"l1_ratio",type:'num',data:[0,1,0.01,0]}
                    ],
                    type:"regression"
                },
                {
                    name:'Lasso',
                    package:'sklearn.linear_model',
                    hyper_params:[
                        {name:"alpha",type:'num',data:[0,1,0.01,1]},
                        {name:"normalize",type:"bool",default:false},
                        {name:"l1_ratio",type:'num',data:[0,1,0.01,0]}
                    ],
                    type:"regression"
                },
                {
                    name:'Ridge',
                    package:'sklearn.regression',
                    hyper_params:[
                        {name:"alpha",type:'num',data:[0,1,0.01,1]},
                        {name:"normalize",type:"bool",default:false},
                        {name:"solver",type:"cat",data:['liblinear','newton-cg', 'lbfgs',  'sag', 'saga']},
                    ],
                    type:"regression"
                },
                {
                    name:'SGDRegressor',
                    package:'sklearn.linear_model',
                    hyper_params:[
                        {name:"alpha",type:'num',data:[0,1,0.01,1]},
                        {name:"normalize",type:"bool",default:false},
                        {name:"solver",type:"cat",data:['liblinear','newton-cg', 'lbfgs',  'sag', 'saga']},
                    ],
                    type:"regression"
                },
                {
                    name:'SGDClassifier',
                    package:'sklearn.linear_model',
                    hyper_params:[
                        {name:"loss",type:"cat",data:['hinge','log', 'modified_huber',  'squared_hinge', 'perceptron','epsilon_intensive']},
                        {name:"penalty",type:'cat',data:['l2','l1','elasticnet','none']},
                        {name:"alpha",type:'num',data:[0,1,0.01,1]},
                        {name:"l1_ratio",type:'num',data:[0,1,0.0001,0.0001]},
                        {name:"early_stopping",type:"bool",default:false},
                        {name:"learning_rate",type:"cat",data:['optimal','constant', 'invscaling',  'adaptive']},
                    ],
                    type:"classification"
                },
                {
                    name:'KNeighborsClassifier',
                    package:'sklearn.neighbors',
                    hyper_params:[
                        {name:"n_neighbors",type:'num',data:[1,20,1,5]},
                        {name:"weights",type:"cat",data:['uniform','distance']},
                        {name:"algorithm",type:"cat",data:['auto','ball_tree','kd_tree','brute']},
                        {name:"leaf_size",type:'num',data:[1,100,1,30]},
                        {name:"p",type:'num',data:[1,10,1,2]},                    
                    ],
                    type:"classification"
                },
                {
                    name:'KNeighborsRegressor',
                    package:'sklearn.',
                    hyper_params:[
                        {name:"n_neighbors",type:'num',data:[1,20,1,5]},
                        {name:"weights",type:"cat",data:['uniform','distance']},
                        {name:"algorithm",type:"cat",data:['auto','ball_tree','kd_tree','brute']},
                        {name:"leaf_size",type:'num',data:[1,100,1,30]},
                        {name:"p",type:'num',data:[1,10,1,2]},                  
                    ],
                    type:"regression"
                },
                {
                    name:'GaussianNB',
                    package:'sklearn.naive_bayes',
                    hyper_params:[                  
                    ],
                    type:"classification"
                },
                {
                    name:'LinearSVC',
                    package:'sklearn.svm',
                    hyper_params:[
                        {name:"penalty",type:"cat",data:['l2','l1']},
                        {name:"loss",type:"cat",data:['squared_hinge','hinge']},
                        {name:"dual",type:"bool",default:true},
                        {name:"C",type:'num',data:[0.1,10,0.1,1]},
                        {name:"multi_class",type:"cat",data:['ovr','crammer_singer']},
                        {name:"fit_intercept",type:"bool",default:true},                
                    ],
                    type:"classification"
                },
                {
                    name:'LinearSVR',
                    package:'sklearn.svm',
                    hyper_params:[
                        {name:"epsilon",type:'num',data:[0,10,0.2,0]},
                        {name:"loss",type:"cat",data:['squared_hinge','hinge']},
                        {name:"dual",type:"bool",default:true},
                        {name:"C",type:'num',data:[0.1,10,0.1,1]},
                        {name:"fit_intercept",type:"bool",default:true},    
                    ],
                    type:"regression"
                },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"classification"
                // },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"regression"
                // },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"classification"
                // },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"regression"
                // },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"classification"
                // },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"regression"
                // },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"classification"
                // },
                // {
                //     name:'',
                //     package:'sklearn.',
                //     hyper_params:[
                //         {name:"",type:"cat",data:[,,,]},
                //         {name:"",type:'num',data:[,,,]},
                //         {name:"",type:"bool",default:false},                    
                //     ],
                //     type:"regression"
                // },
            ]

const Train = (props) =>{
    let algo;
    let [hyper,hyperState] = React.useState(<Hyperparams data={[]} />)
    let [features,featuresState] = React.useState([])
    let [evaluation,evaluationState] = React.useState(
            <div>
                MSE/Confusion Matrix
            </div>
        )
    let columns = useSelector(state => state.columns),i,j;


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
            else if (temp.type === "cat"){
                algo.hyperparams[temp.name] = temp.data[0]
            }
            else{
                algo.hyperparams[temp.name] = temp.data[3]
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
                features:features,
                user:"viraj"
            }
        }).then(response =>{
            // console.log(response.data);
            if (response.data.status){
                evaluationState(<Evaluation data={response.data} />);
            }
            else{
                createNotification("Error",response.data.msg)
            }
        })
        // console.log("Cols :",window.features)
    }
    
    let tuneParam = (p,v) => {
        window.trainopt.hyperparams[p] = v
        // console.log(window.trainopt.hyperparams[p])
    }

    const selectFeature = (v,n) =>{
        if (v.checked){
            features.push(n)
            featuresState(features)
        }
        else{
            features = features.filter((feat,i)=>{
                if (feat !== n){
                    return feat
                }
            })
            featuresState(features)
        }
        console.log(features)
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
                            <div className="table-cont" style={{margin:"50px 50px",background:"white"}}>
                                {evaluation}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Train;