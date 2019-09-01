import React from 'react';
import axios from 'axios'
import {ReactComponent as UploadLogo} from '../../../images/upload.svg'

const Upload = (props) =>{
    return(
        <div className="card flex-center" style={{cursor:"pointer"}} >
            <input id="upload" type="file" style={{ height:"0px",width:"0px",visibility:"hidden" }} onChange={props.upload} />
            <label htmlFor="upload" className="flex-center" style={{cursor:"pointer",height:"100%",width:"100%"}}>
                <UploadLogo className="upload-logo" />
            </label>
        </div>
    )
}

export default Upload;