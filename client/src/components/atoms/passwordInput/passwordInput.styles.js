import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    border: 1.5px solid ${colors.inputBorder};
    border-radius: 12px;
    padding: 0.7em 1.5em;
    text-align: left;
    appearance: none;
    input {
        width: 255px;
        font-weight: normal;
        font-family: 'gotham', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1em;
        color: ${colors.primaryText};
        border: none;
        outline: none;
    }
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
