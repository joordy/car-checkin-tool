// Imports
import * as Styles from './radioInput.styles.js'
import { useState } from 'react'

// Component
const RadioInput = ({ checked, title, text, id, value, name, changeState }) => {
    let checkedInput

    if (checked) {
        checkedInput = (
            <input
                onChange={changeState}
                type="radio"
                id={id}
                value={value}
                name={name}
                defaultChecked
            />
        )
    } else {
        checkedInput = (
            <input onChange={changeState} type="radio" id={id} value={value} name={name} />
        )
    }
    return (
        <Styles.Label htmlFor={value}>
            {checkedInput}
            <span className="checkmark"></span>
            <p>{title}</p>
            <p>{text}</p>
        </Styles.Label>
    )
}

export default RadioInput
