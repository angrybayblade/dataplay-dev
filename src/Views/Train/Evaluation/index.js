import React from 'react';
import Plot from 'react-plotly.js';

const Evaluation = (props) =>{
    let chart = null
    
   

    if (props.data.type === 'mse'){
        var trace1 = {
            x: [1, 2, 3],
            y: [4, 5, 6],
            type: 'scatter'
          };
          
          var trace2 = {
            x: [20, 30, 40],
            y: [50, 60, 70],
            xaxis: 'x2',
            yaxis: 'y2',
            type: 'scatter'
          };
          
          var trace3 = {
            x: [300, 400, 500],
            y: [600, 700, 800],
            xaxis: 'x3',
            yaxis: 'y3',
            type: 'scatter'
          };
          
          var trace4 = {
            x: [4000, 5000, 6000],
            y: [7000, 8000, 9000],
            xaxis: 'x4',
            yaxis: 'y4',
            type: 'scatter'
          };
          
          var data = [trace1, trace2, trace3, trace4];
          
          var layout = {
            grid: {rows: 2, columns: 2, pattern: 'independent'},
            title:"Validation"
          };

          chart = <Plot 
            data={data}
            layout={layout}
          />
    }
    else{
        console.log(props.data.validation.conf_mat)
        var trace1 = {
            x: props.data.validation.f1_cv,
            type: 'histogram',
            name:"F1 Score"
          };
          
          var trace2 = {
            x: props.data.validation.pres_cv,
            name:"Precision Score",
            xaxis: 'x2',
            yaxis: 'y2',
            type: 'histogram'
          };
          
          var trace3 = {
            x: props.data.validation.rec_cv,
            name:"Recall Score",
            xaxis: 'x3',
            yaxis: 'y3',
            type: 'histogram'
          };
          
          var trace4 = {
            z: props.data.validation.conf_mat,
            xaxis: 'x4',
            yaxis: 'y4',
            type: 'heatmap',
            showscale: false
          };
          
          var data = [trace1,trace2,trace3,trace4];
          
          var layout = {
            grid: {rows: 2, columns: 2, pattern: 'independent'},
            title:"Validation"
          };

          chart = <Plot 
            data={data}
            layout={layout}
          />
    }

    return(
        <div>
            {chart}
        </div>
    )
}

export default Evaluation;