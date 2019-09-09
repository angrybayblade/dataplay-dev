import React,{ useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios"

import Selector from './Selector'
import Loading from '../Loading'
import Table from './Table'

const Transform = (props) =>{

    let columns = useSelector(state => state.columns)
    let [method,methodState] = useState([
            {name:"Imputer"},
            {name:"MinMax Scaler"},
            {name:"Standard Scaler"},
            {name:"Normalizer"},
            {name:"Label Encoder"},
            {name:"One Hot Encode"}
        ])
    let [rend,rendState] = useState({
            tablePreview:"Select Feature",
            methodPreview:"Select Method"
        })


    const selectLabel = (e) =>{
        window.label = e
    }

    const selectFeature = (e) =>{
        rendState({
            tablePreview:<Loading />,
            methodPreview:rend.methodPreview
        })

        window.column = e;

        async function fetch(){
            await axios({
                url:"http://localhost:8080/transform",
                method:"POST",
                data:{
                    user:"viraj",
                    column:e
                }
            }).then(response =>{
                console.log(response.data.column)
                rendState({
                    tablePreview:<Table columns={[{name:e}]} data={response.data.column} />,
                    methodPreview:rend.methodPreview
                })
            })
        }

        fetch()

    }

    const selectMethod = (e) =>{
        rendState({
            tablePreview:rend.tablePreview,
            methodPreview:<Loading />
        })

        window.method = e;

        async function fetch(){
            await axios({
                url:"http://localhost:8080/transform",
                method:"POST",
                data:{
                    user:"viraj",
                    column:window.column,
                    method:e,
                    save:false
                }
            }).then(response =>{
                console.log(response.data)
                rendState({
                    tablePreview:<Table columns={[{name:window.column}]} data={response.data.column} />,
                    methodPreview:<Table columns={[{name:e}]} data={response.data.trans} />
                })
            })
        }

        fetch()
    }

    const saveTrans = (e) =>{
        async function fetch(){
            await axios({
                url:"http://localhost:8080/transform",
                method:"POST",
                data:{
                    user:"viraj",
                    column:window.column,
                    method:window.method,
                    save:true
                }
            }).then(response =>{
                console.log(response.data)
            })
        }
        fetch()
    }

    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col">
                            <Selector data={columns} title={"Select Label"} onchange={selectLabel}/>
                            <Selector data={columns} title={"Select Feature"} onchange={selectFeature}/>
                            <Selector data={method} title={"Select method"} onchange={selectMethod}/>
                            <div className="selector-btn btn" onClick={saveTrans}>
                                Save
                            </div>
                        </div>
                        <div className="overview-col">
                            <div className="table-cont">
                                {rend.tablePreview}
                            </div>
                            <div className="table-cont" >
                                {rend.methodPreview}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transform;