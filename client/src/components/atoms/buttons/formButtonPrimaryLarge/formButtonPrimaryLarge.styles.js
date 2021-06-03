import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Button = styled.button`
    display: block;
    width: ${(props) => props.width || '284px'};
    height: 48px;
    border-radius: 8px;
    font-family: 'gotham';
    font-weight: 700;
    font-size: 1em;
    line-height: 0;
    text-align: center;
    padding: 1.2em 0;
    background-color: ${colors.primary};
    border: 0.15em solid ${colors.primary};
    color: ${colors.primaryText};
    text-decoration: none;
    &:hover {
        cursor: pointer;
        border: 0.15em solid ${colors.primaryText};
    }
`
