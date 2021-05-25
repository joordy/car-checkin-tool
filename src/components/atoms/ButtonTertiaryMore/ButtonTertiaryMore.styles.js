import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Button = styled.a`
    /* display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    height: ${(props) => props.height || '48px'};
    padding: 0.3em;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1em;
    text-align: center;
    background-color: #e5e5ea;
    border: 0.15em solid #e5e5ea;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        border: 0.15em solid #999aad;
    } */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    padding: 0.2em;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1em;
    text-align: center;
    background-color: #e5e5ea;
    border: 0.15em solid #e5e5ea;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        border: 0.15em solid ${colors.inputHover};
    }
`
