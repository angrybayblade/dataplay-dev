import React,{ useState } from 'react';
import Selector from './Selector'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'

const Visualize = (props) =>{

    window.x = null
    window.y = null
    window.chart = null
    window.hue = null

    let columns = useSelector(state=>state.columns)
    let [charts,chartsState] = useState([
            {name:"Bar",type:"bar"},
            {name:"Line",type:"line"},
            {name:"Scatter",type:"scatter"},
            {name:"Histogram",type:"histogram"},
        ])

    let [chart,chartState] = useState(<img src="//" alt="Plot" />)

    const selecX = (x) => window.x = x
    const selecY = (y) => window.y = y
    const selecChart = (chart) => window.chart = chart
    const selecHue = (hue) => window.hue = hue
    
    const plot = (x,y,chart,hue,user="viraj") =>{
        async function fetch(){
            await axios({
                url:"http://localhost:8080/visualize",
                method:"POST",
                data:{
                    x,
                    y,
                    chart,
                    hue,
                    user
                }
            }).then(response=>{
                console.log(response.data)
                chartState(<object data={response.data.chart} type="image/svg+xml" className="chart-img" />)
                // chartState(<embed type="image/svg+xml" src= {response.data.chart} />)
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
                            <Selector title="X" data={columns} onchange={selecX} />
                            <Selector title="Y" data={columns} onchange={selecY} />
                            <Selector title="Chart" data={charts} onchange={selecChart} />
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
                                {chart}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualize;