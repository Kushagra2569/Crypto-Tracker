import React from 'react'

function Dataview(props) {
    return (
        <div className = "dataView">
            <p id = "header">{props.header}</p>
            <p id = "value">{props.value}</p>
        </div>
    )
}

export default Dataview
