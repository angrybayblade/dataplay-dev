import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

function disp(type,payload){
    return{
        type,
        payload
    }
}

const Upload = (props) =>{

    const dispatch = useDispatch()

    dispatch(disp(
            "COLUMNS",
            props.columns
        ))

    dispatch(disp(
            "OVERVIEW",
            props.overview
        ))

    return(
        <div className="card flex-center" style={{cursor:"pointer"}} onClick={props.upload}>
            <Link to="/overview" className="flex-center" style={{height:"100%",width:"100%"}}>
                {props.name}
            </Link>
        </div>
    )
}

export default Upload;