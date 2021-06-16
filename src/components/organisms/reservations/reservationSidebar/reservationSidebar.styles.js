import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Sidebar = styled.section`
    position: absolute;
    width: calc(10vw + 12em);
    height: 100vh;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    > svg {
        width: 8vw;
        padding: 4em;
    }

    > ul {
        margin: 0;
        padding: 0;
        li {
            margin: 0;
            padding: 2rem;
            list-style-type: none;
            border-top: 1px solid rgba(100, 100, 100, 0.3);
            color: rgba(100, 100, 100, 0.3);
            &:first-of-type {
                color: ${colors.secondary};
                font-weight: bold;
            }
            &:last-of-type {
                border-bottom: 1px solid rgba(100, 100, 100, 0.3);
            }
        }
    }

    div {
        position: absolute;
        display: flex;
        bottom: 2em;
        left: 2em;

        span::before {
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: green;
            z-index: -1;
        }

        span {
            > svg {
                padding: 0.75em;
            }
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0 0 0 1em;

            li {
                line-height: 1.5em;
                font-size: 1em;
                &:first-of-type {
                    font-weight: bold;
                }
            }
        }
    }
`
