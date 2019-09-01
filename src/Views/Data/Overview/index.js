import React from 'react';

import Head from './Tables/Head'
import Describe from './Tables/Describe'
import ColInfo from './Tables/ColInfo'

const Overview = (props) =>{
    console.log(props.data)
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
                        <div className="table-cont flex-center">
                            <Head data={props.data.head} columns={props.columns} />
                        </div>
                        <div className="table-cont flex-center">
                            <ColInfo data={props.columns} />
                        </div>
                        <div className="table-cont flex-center">
                            <Describe data={props.data.description} columns={props.columns} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;