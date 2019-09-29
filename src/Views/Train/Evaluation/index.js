import React from 'react';
import Plot from 'react-plotly.js';

const Evaluation = (props) =>{
    let chart = null

    if (props.data.type === 'mse'){
        chart=<Plot
                data={[
                    {
                        x:['Training','Validation'],
                        y:[props.data.train,props.data.test],
                        type:'bar'
                    }
                ]}
                layout={{}}
            />
    }

    return(
        <div>
            {chart}
        </div>
    )
}

export default Evaluation;