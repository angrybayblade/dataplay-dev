import React from 'react';

import InputCat from './InputCat';
import InputBool from './InputBool';
import InputNum from './InputNum';

const Inputs = (props) =>{
    // console.log(props.data)
    if(props.type  === "cat"){
        return(
            <InputCat 
                tuneparam = {props.tuneparam} 
                name={props.data.name} 
                data={props.data.data}
            />
        )
    }
    else if (props.type === "bool"){
        return(
            <InputBool 
                tuneparam = {props.tuneparam} 
                name={props.data.name}
                default={props.data.default}
            />
        )
    }
    else if (props.type === "num"){
        return (
            <InputNum 
                tuneparam = {props.tuneparam} 
                name={props.data.name} 
                min={props.data.data[0]} 
                max={props.data.data[1]} 
                step={props.data.data[2]}
            />
        )
    }
    else{
        return(
            <input />
        )
    }
} 

export default Inputs;