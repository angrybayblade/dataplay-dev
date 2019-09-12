import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'

const update = (type,payload) =>{
    return{
        type,
        payload
    }
}


const InputNum = (props) =>{

    let [value,valueState] = useState(props.min)
    
    let train = useSelector(state => state.train)
    let dispatch = useDispatch();

    const UpdateParams = (p,v) =>{
        let pars = train.hyperparams;
        pars[p] = Number(v);
        train.hyperparams = pars
        dispatch(update("TRAIN-UPDATE",train))
    }


    return(
        <div className="input-num">
            <input type="range" step={props.step} min={props.min} max={props.max} value={value} className="slider" onChange={(e)=>{
                valueState(e.target.value)
                UpdateParams(props.name,e.target.value)
            }}/>
            <div className="num-val">
                {value}
            </div>
        </div>       
    )
}

export default InputNum;