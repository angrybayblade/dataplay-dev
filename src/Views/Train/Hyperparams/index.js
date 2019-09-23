import React from 'react';
import Inputs from './Inputs/Inputs'


const Hyperparams = (props) =>{

    
    let inputs = props.data.map((param,i)=>{
        return (
            <Inputs type={param.type} data={param} key={i} tuneparam = {props.tuneParam} />
        )
    })

    return(
        <div className="hyperparams">
            {inputs}
        </div>
    )
}

export default Hyperparams;