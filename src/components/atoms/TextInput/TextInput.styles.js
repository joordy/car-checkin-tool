import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Input = styled.input`
    display: block;
    width: 300px;
    font-weight: normal;
    font-family: 'gotham', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 1.5px solid ${colors.inputBorder};
    border-radius: 12px;
    padding: 1em 1.5em;
    font-size: 1em;
    text-align: left;
    color: ${colors.primaryText};
    appearance: none;
    &:hover {
        border: 1.5px solid ${colors.inputHover};
    }
    &:focus {
        outline: none;
        border: 1.5px solid ${colors.inputHover};
    }
    ::placeholder {
        color: ${colors.secondaryText};
    }
`
