import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Warnings = styled.article`
    &.result-message {
        line-height: 1.25rem;
        font-size: 1rem;
        position: relative;
        top: -1.7em;
    }
    &.result-message a {
        color: rgb(89, 111, 214);
        font-weight: 600;
        text-decoration: none;
    }
    &.hidden {
        display: none;
    }
    &#card-error {
        color: rgb(105, 115, 134);
        font-size: 16px;
        line-height: 20px;
        margin-top: 12px;
        text-align: center;
    }
    &#card-element {
        border-radius: 4px 4px 0 0;
        padding: 12px;
        border: 1px solid rgba(50, 50, 93, 0.1);
        max-height: 44px;
        width: 100%;
        background: white;
        box-sizing: border-box;
    }
    &#payment-request-button {
        margin-bottom: 32px;
    }
    &.card-error {
        background-color: ${colors.errorFill};
    }
    &.result-message {
        background-color: ${colors.secondary}30;
    }
    display: flex;
    padding: 1.25rem;
    > span {
        margin-right: 1.25rem;
        svg {
            path {
                stroke: ${colors.primaryText};
            }
        }
    }
    div {
        p {
            margin: 0;
        }
    }

    /* svg {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height || '100%'};
        opacity: ${(props) => props.opacity || '1'};
        path {
            fill: ${(props) => props.fill};
        }
    } */
`
