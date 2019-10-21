import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => {
    return (
        <button type={'button'} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Button
