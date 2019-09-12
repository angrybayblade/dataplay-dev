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

    const UpdateParams = (p,v) =>{
        let pars = train.hyperparams
        pars[p] = Boolean(Number(v));
        train.hyperparams = pars
        dispatch(update("TRAIN-UPDATE",train))
    }

    return(
        <select name={props.name} className="input-select marg-0" onChange={(e)=>{UpdateParams(props.name,e.target.value)}}>
            <option value={1} >True</option>
            <option value={0} >False</option>
        </select>
    )
}

export default InputBool;