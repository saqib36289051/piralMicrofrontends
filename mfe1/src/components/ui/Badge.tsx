import React from 'react'
import "./badge.scss"

const Badge = ({ children }) => {
    return (
        <div className='badge'>{children}</div>
    )
}

export default Badge