import React from 'react'

const ColIInfo = (props) =>{
    console.log(props.data)
    let rows = props.data.map((row,i)=>{
        return (
            <tr className="table-row" key={i}>
                <td>
                    {row.name}
                </td>
                <td>
                    {row.dtype}
                </td>
                <td>
                    {row.nullvals}
                </td>
                <td>
                    {row.type}
                </td>
                <td>
                    {row.nunique}
                </td>
            </tr>
        )
    })

    let cols = ['Column','Data Type','Null Values','Type','Number Of Uniques'].map((col,i)=>{
        return (
            <th key={i}>
                {col}
            </th>
        )
    })

    return(
        <table>
            <thead>
                <tr className="table-head">
                    {cols}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default ColIInfo;