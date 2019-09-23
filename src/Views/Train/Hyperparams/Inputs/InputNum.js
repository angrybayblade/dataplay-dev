import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'

const InputNum = (props) =>{

    let [value,valueState] = useState(props.min)

    return(
        <div className="input-num-param">
            <input type="range" step={props.step} min={props.min} max={props.max} value={value} className="slider" onChange={(e)=>{
                valueState(e.target.value)
                props.tuneparam(props.name,e.target.value)
            }}/>
            <div className="num-val">
                {value}
            </div>
        </div>       
    )
}

export default InputNum;