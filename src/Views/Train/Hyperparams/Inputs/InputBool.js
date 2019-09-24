import React from 'react';
import {useSelector,useDispatch} from 'react-redux'

const update = (type,payload) =>{
    return{
        type,
        payload
    }
}

const InputBool = (props) =>{

    let train = useSelector(state => state.train)
    let dispatch = useDispatch();
    let [ defaultval, defaultState ] =  React.useState(Number(props.default))

    return(
        <select 
            name={props.name} 
            value={defaultval} 
            className="input-select-param marg-0" 
            onChange={(e)=>{
                props.tuneparam(props.name,e.target.value)
                defaultState(e.target.value)
            }}
        >
            <option value={1} >True</option>
            <option defaultValue={true} value={0} >False</option>
        </select>
    )
}

export default InputBool;