import React from 'react';
import {useSelector,useDispatch} from 'react-redux'

const update = (type,payload) =>{
    return{
        type,
        payload
    }
}

const InputCat = (props) =>{

    let train = useSelector(state => state.train)
    let dispatch = useDispatch();
    // let [defaultval,defaultState] = React.useState(props.default)

    let options =  props.data.map((option,i)=>{
        return(
            <option key={i} value={option} >{option}</option>
        )
    })
    
    return(
        <select 
            name={props.name} 
            className="input-select-param marg-0" 
            onChange={(e)=>{
                props.tuneparam(props.name,e.target.value)
                // defaultState(e.target.value)
            }}
        >
            {options}
        </select>
    )
}

export default InputCat;