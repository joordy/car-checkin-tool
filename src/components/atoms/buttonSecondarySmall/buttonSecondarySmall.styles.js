import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Button = styled.a`
    display: block;
    width: 143px;
    max-height: 48px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1em;
    text-align: center;
    padding: 1.2em 0;
    background-color: ${colors.white};
    border: 0.15em solid ${colors.secondary};
    color: ${colors.secondary};
    text-decoration: none;
    &:hover {
        cursor: pointer;
        background-color: ${colors.secondary};
        color: ${colors.white};
    }
`
