import React,{ useState } from 'react';
import Selector from './Selector'
import { useDispatch,useSelector } from 'react-redux'

const Visualize = (props) =>{

    let columns = useSelector(state=>state.columns)
    let [charts,chartsState] = useState([
            {name:"Bar",type:"bar"},
            {name:"Line",type:"line"},
            {name:"Scatter",type:"scatter"},
            {name:"Histogram",type:"histogram"},
        ])

    return(
        <div className="container-par">
            <div className="splash">
            </div>
            <div>
                <div className="container flex-center">
                    <div className="transform">
                        <div className="selector-col">
                            <Selector title="X" data={columns} />
                            <Selector title="Y" data={columns} />
                            <Selector title="Chart" data={charts} />
                            <Selector title="Hue" data={columns} />
                            <div className="selector-btn">
                                Plot
                            </div>
                        </div>
                        <div className="overview-col">
                            <div className="table-cont chart-cont">
                                Cont
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualize;