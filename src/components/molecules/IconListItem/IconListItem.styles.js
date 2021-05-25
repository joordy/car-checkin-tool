import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Wrapper = styled.li`
    display: flex;
    list-style-type: none;
    color: ${colors.white};
    div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 99em;
        background-color: rgba(255, 255, 255, 0.75);
        margin-right: 1.5em;
        ${(props) => {
            if (props.complete === true)
                return `
                background-color: ${colors.primary};
                svg {
                    opacity: 1;
                }
            `
        }}
        svg {
            margin-top: 0.2em;
        }
    }
    div:last-of-type {
        width: 12em;
        h3 {
            font-size: 1.15em;
            margin: 0.7em 0 0.5em 0;
        }
        p {
            font-size: 1em;
            margin: 0;
        }
    }
`
