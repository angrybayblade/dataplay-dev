import React from 'react'

const Selector = (props) =>{

    let options = props.data.map((option,i)=>{
        return(
            <option value={option.name} key={i}>
                {option.name}
            </option>
        )
    })

    return(
        <div className="selector-row chart-row">
            <div className="selector-label flex-center">
                {props.title}
            </div>
            <div className="selector-input flex-center">
                <select>
                   {options}
                </select>
            </div>
        </div>
    )
}

export default Selector;