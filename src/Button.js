import React from 'react'
import './button.css'
// import PropTypes from 'prop-types'

const Button = ({text,colr}) => {
    return (
        
            <button  className='btn'
            style={{color : colr}}>
                 {text} 
            </button>
        
    )
}

export default Button
