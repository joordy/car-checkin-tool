import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Button = styled.a`
    display: block;
    width: ${(props) => props.width || '284px'};
    max-height: 48px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1em;
    text-align: center;
    padding: 0.75em 0;
    background-color: ${colors.primary};
    border: 0.15em solid ${colors.primary};
    color: ${colors.primaryText};
    text-decoration: none;
    &:hover {
        cursor: pointer;
        border: 0.15em solid ${colors.primaryText};
    }
`
