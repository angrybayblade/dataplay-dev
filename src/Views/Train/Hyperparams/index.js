import React from 'react';
import Inputs from './Inputs/Inputs'


const Hyperparams = (props) =>{
    
    let inputs = props.data.map((param,i)=>{
        return (
            <Inputs type={param.type} data={param} key={i} />
        )
    })

    return(
        <div>
            {inputs}
        </div>
    )
}

export default Hyperparams;