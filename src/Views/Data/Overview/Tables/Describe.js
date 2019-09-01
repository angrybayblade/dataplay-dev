import React from 'react'

const Describe = (props) =>{
    let rows = props.data.map((row,i)=>{
        let rowed = row.data.map((row,i)=>{
            return (
                <td className="table-row" key={i}>
                    {row}
                </td>
            )
        })
        return(
            <tr key={i} className="table-row">
                <td>
                    {row.name}
                </td>
                {rowed}
            </tr>
        )
    })

    let head = ['column','count','mean','std','min','25%','50%','75%','max'].map((h,i)=>{
        return (
            <th key={i}>
                {h}
            </th>
        )
    })

    return (
        <table>
            <thead>
                <tr className="table-head">
                    {head}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Describe;