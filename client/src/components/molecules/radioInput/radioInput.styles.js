import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Label = styled.label`
    display: block;
    position: relative;
    padding-left: 2.5em;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        input ~ .checkmark {
            border: 2px solid #009900;
        }
    }

    p {
        margin: 0;
        &:last-of-type {
            margin: 0.3em 0 1.5em 0;
            color: #666782;
        }
    }

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ .checkmark {
            background-color: #009900;
            border: 2px solid #009900;
            &::after {
                display: block;
            }
        }
        &:checked ~ p:first-of-type {
            color: #009900;
        }
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 1.5em;
        width: 1.5em;
        border-radius: 99em;
        border: 2px solid #ccccd6;
        &::after {
            content: '';
            position: absolute;
            display: none;
            left: 0.6em;
            top: 0.4em;
            width: 5px;
            height: 10px;
            border: solid white;
            border-radius: 0.1em;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
`
