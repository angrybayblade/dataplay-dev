import React from 'react';
import { ReactComponent  as Loading} from '../images/loading.svg';


const LoadingAnimation = (props) =>{
    return(
        <div className="loading">
            <Loading style={{height:"inherit"}} />
        </div>
    )
}

export default LoadingAnimation;