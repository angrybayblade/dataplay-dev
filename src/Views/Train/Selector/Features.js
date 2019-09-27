import React from 'react'

const Features = (props) =>{
    let columns = props.columns.map((col,i)=>{
        return (
            <div key={i} className="feature">
                <label className="feature-label" >{col.name}</label>
                <input type="checkbox" onChange={(e)=>{props.selectFeature(e.target,col.name)}} defaultChecked name={col.name} value={col.name} className="feature-input" />
            </div>
        )
    })

    return (
        <div className="feature-selector">
            {columns}
        </div>
    )
}

export default Features;