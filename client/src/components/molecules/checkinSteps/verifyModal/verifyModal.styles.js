import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Modal = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    article {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        background-color: white;
        width: min(200px, 80%);
        padding: 2.5rem 2rem;
        border-radius: 1rem;
        button {
            max-width: 100%;
        }
        span {
            margin-bottom: 1rem;
            svg {
                stroke: ${colors.secondary};
            }
        }
    }
`
