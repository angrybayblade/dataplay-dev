import React from 'react';
import {useDispatch} from 'react-redux'

import Head from './Tables/Head'
import Describe from './Tables/Describe'
import ColInfo from './Tables/ColInfo'

const disp = (type,payload) =>{
    return{
        type,
        payload
    }
}

const Overview = (props) =>{
    
    const dispatch = useDispatch()

    dispatch(disp(
            "COLUMNS",
            props.columns
        ))

    dispatch(disp(
            "OVERVIEW",
            props.data
        ))

    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center flex-column">
                    <div className="page-title">
                        Overview
                    </div>
                    <div className="overview">
                        <div className="table-cont flex-center slide-in-from-left-0">
                            <Head data={props.data.head} columns={props.columns} />
                        </div>
                        <div className="table-cont flex-center slide-in-from-left-1">
                            <ColInfo data={props.columns} />
                        </div>
                        <div className="table-cont flex-center slide-in-from-left-2">
                            <Describe data={props.data.description} columns={props.columns} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;