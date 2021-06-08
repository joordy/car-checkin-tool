import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Modal = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.secondary}99;
    display: flex;
    justify-content: center;
    align-items: center;
    article {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        color: white;
        width: 100vw;
        opacity: 1;
        padding: 2.5rem 0;
        border-radius: 1rem;
        button {
            max-width: 100%;
        }
        h4 {
            font-size: 1.5rem;
        }
        p {
            margin: 0.25rem 0 0 0;
        }
        span {
            margin-bottom: 0.5rem;
            svg {
                stroke: white;
            }
        }
    }
`
