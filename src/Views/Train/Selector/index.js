import React from 'react'

const Selector = (props) =>{

    let options = props.data.map((option,i)=>{
        if (props.type){
            return(
                <option value={JSON.stringify(option)} key={i}>
                    {option.name}
                </option>
            )            
        }
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
                <select onChange={(e)=>props.onchange(e.target.value)}>
                    <option value={null}>Select</option>
                   {options}
                </select>
            </div>
        </div>
    )
}

export default Selector;