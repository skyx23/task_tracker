import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {


    return (
        <div>
            <button  onClick={props.onclick} style={{backgroundColor : props.color}}className='btn'>{props.text}</button>
        </div>
    )
}

Button.defaultProps = {
    text : 'Button' ,
    color : 'black',
    onclick : (e) => {
        console.log(e, "event fired from default props")
    }
}

Button.propTypes = {
    text : PropTypes.string,
    onclick : PropTypes.func,
    color : PropTypes.string
}

export default Button
