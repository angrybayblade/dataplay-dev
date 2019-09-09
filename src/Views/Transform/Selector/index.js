import React from 'react'
import { useDispatch } from 'react-redux'
 
const update = (type,payload) =>{
    return{
        type,
        payload
    }
}

const Selector = (props) =>{
    let selector = props.data.map((option,i)=>{
        return(
            <option value={option.name} key={i}>
                {option.name}
            </option>
        )
    })

    let dispatch = useDispatch()

    if(props.change){    
        dispatch(update("COLUMNS",props.data))
    }

    return(
        <div className="selector-row">
            <div className="selector-label flex-center">
                {props.title}
            </div>
            <div className="selector-input flex-center">
                <select onChange={(e)=>{props.onchange(e.target.value)}}>
                    {selector}
                </select>
            </div>
        </div>
    )
}

export default Selector;