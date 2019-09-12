import React from 'react';

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

    let [hyper,hyperState] = React.useState(<Hyperparams data={[]} />)
    const selectAlgo = (x) => hyperState(<Hyperparams data={JSON.parse(x).hyper_params} />)
                                        
    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col">
                            <Selector data={ models } title={"Algorithm"} type onchange={selectAlgo} />
                            <div className="selector-row">
                                <div className="selector-label flex-center">
                                    Hyper Params
                                </div>
                                <div className="selector-input flex-center flex-column">
                                    {hyper}
                                </div>
                            </div>
                            <div className="selector-btn">
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