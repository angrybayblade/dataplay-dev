import React,{ useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios"

import Selector from './Selector'
import Loading from '../Loading'
import Table from './Table'
import cerateNotification from '../Noftification';
import createNotification from '../Noftification';

const Transform = (props) =>{

    let columns = useSelector(state => state.columns),i,j;
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
                    methodPreview:"Select Method"
                })
            })
        }

        fetch()
        cerateNotification("Selected",e);

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
                if (e === "One Hot Encode"){
                    rendState({
                        tablePreview:<Table columns={[{name:window.column}]} data={response.data.column} />,
                        methodPreview:<Table columns={response.data.trans.columns} data={response.data.trans.values} method={e} />
                    })
                }
                else{
                    rendState({
                        tablePreview:<Table columns={[{name:window.column}]} data={response.data.column} />,
                        methodPreview:<Table columns={[{name:e}]} data={response.data.trans} />
                    })
                }
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
                let cols=response.data.cols.filter((col,k)=>{
                    for(i in columns){
                        if (columns[i].name === col){
                            return false
                        }
                    }
                    return true
                });
                for(i in cols){
                    columns.push({
                        name:cols[i],
                        type:"num",
                        nunique:2,
                        dtype:"int32",
                        nullvals:0
                    })
                }
                selectorState([
                    // <Selector key={0} change={true} data={columns} title={"Select Label"} onchange={selectLabel}/>,
                    <Selector key={1} data={columns} title={"Select Feature"} onchange={selectFeature}/>,
                    <Selector key={2} data={method} title={"Select method"} onchange={selectMethod}/>,
                ])
                createNotification("Saved",window.method+" applied on "+window.column)
            })
        }
        fetch()
    }

    let [selector,selectorState] = useState([
        // <Selector key={0} data={columns} title={"Select Label"} onchange={selectLabel}/>,
        <Selector key={1} data={columns} title={"Select Feature"} onchange={selectFeature}/>,
        <Selector key={2} data={method} title={"Select method"} onchange={selectMethod}/>,
    ])

    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col">
                            {selector}                        
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