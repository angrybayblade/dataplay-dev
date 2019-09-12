import React,{ useState,useEffect } from 'react';
import Selector from './Selector'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import Plot from 'react-plotly.js';

import Loading from '../Loading'

const charts = [
        {name:"Bar",type:"bar"},
        {name:"Line",type:"line"},
        {name:"Scatter",type:"scatter"},
        {name:"Histogram",type:"histogram"},
        {name:"Pie",type:"pie"},
    ]

const chartConfigs = {
        'scatter':{
            x:[],
            y:[],
            mode: 'markers',
            type: 'scatter'
        },
        'line':{
            x:[],
            y:null,
            type: 'line',
            mode: 'line',
        },
        'bar':{
            x:[],
            y:[],
            type: 'bar'
        },
        'donut':{
            type: 'pie',
            domain: {column: 0},
            name: 'GHG Emissions',
            hoverinfo: 'label+percent+name',
            hole: .4,
        },
        'pie':{
            type: 'pie',
        },
        'box':{
            type: 'box',
        },
        'histogram':{
            type:'histogram'
        }
    }

const Visualize = (props) =>{

    let [config,configState] = useState({
                                x : null,
                                y : null,
                                chart : null,
                                hue : null,
                            })

    let columns = useSelector(state=>state.columns),chartRender,configData 
    let [chart,chartState] = useState(<div>Start Plotting</div>)
    let [load,loadState] = useState(false)

    const selecX = (X) => configState({
                            x:X,
                            y:config.y,
                            chart:config.chart,
                            hue:config.hue
                        })

    const selecY = (Y) => configState({
                                x:config.x,
                                y:Y,
                                chart:config.chart,
                                hue:config.hue
                            })

    const selecChart = (Chart) => configState({
                                x:config.x,
                                y:config.y,
                                chart:chartConfigs[Chart],
                                hue:config.hue
                            })

    const selecHue = (Hue) => configState({
                                x:config.x,
                                y:config.y,
                                chart:config.chart,
                                hue:Hue
                            })
    
    const plot = (x,y,chart,hue,user="viraj") =>{
        loadState(true)
        async function fetch(){
            configData = config;
            configData.user = "viraj"

            await axios({
                url:"http://localhost:8080/visualize",
                method:"POST",
                data:configData
            }).then(response=>{
                console.log(response.data)
                
                chartState(
                            <Plot
                                data={response.data.data}
                                layout={response.data.layout}
                            />
                        )
            })
        }
        fetch()
        loadState(false)
    }
    
   

    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col">
                            <Selector title="X" data={columns} onchange={selecX} />
                            <Selector title="Y" data={columns} onchange={selecY} />
                            <Selector title="Chart" data={charts} onchange={selecChart} type />
                            <Selector title="Hue" data={columns} onchange={selecHue} />
                            <div className="selector-btn" onClick={()=>{
                                plot(
                                    window.x,
                                    window.y,
                                    window.chart,
                                    window.hue
                                )
                            }}>
                                Plot
                            </div>
                        </div>
                        <div className="overview-col">
                            <div className="table-cont chart-cont">
                                { load ? <Loading /> : chart }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualize;