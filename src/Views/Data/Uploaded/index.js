import React from 'react';
import {Link} from 'react-router-dom'

const Upload = (props) =>{
    return(
        <div className="card flex-center" style={{cursor:"pointer"}} onClick={props.upload}>
            <Link to="/overview" className="flex-center" style={{height:"100%",width:"100%"}}>
                {props.name}
            </Link>
        </div>
    )
}

export default Upload;