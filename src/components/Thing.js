import React, { Children } from 'react'

const Thing = props => {
    return (
    <li className="list-group-item">{props.children}</li>
    )
}

export default Thing