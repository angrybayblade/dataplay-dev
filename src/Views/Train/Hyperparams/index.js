import React from 'react';
import Inputs from './Inputs/Inputs'


const Hyperparams = (props) =>{

    
    let inputs = props.data.map((param,i)=>{
        // console.log(param.name)
        return (
            <div key={i} className="hyper-container">
                <div className="hyperparam-label">
                    {param.name}
                </div>
                <Inputs className="hyperparam" type={param.type} data={param}  tuneparam = {props.tuneParam} />
            </div>
        )
    })

    return(
        <div className="hyperparams">
            {inputs}
        </div>
    )
}

export default Hyperparams;