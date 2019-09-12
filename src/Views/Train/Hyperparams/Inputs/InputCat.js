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

    const UpdateParams = (p,v) =>{
        let pars = train.hyperparams;
        pars[p] = v;
        train.hyperparams = pars;
        dispatch(update("TRAIN-UPDATE",train))
    }

    let options =  props.data.map((option,i)=>{
        return(
            <option key={i} value={option} >{option}</option>
        )
    })
    
    return(
        <select name={props.name} className="input-select marg-0" onChange={(e)=>{UpdateParams(props.name,e.target.value)}}>
            {options}
        </select>
    )
}

export default InputCat;