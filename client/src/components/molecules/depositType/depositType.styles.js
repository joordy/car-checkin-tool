import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Accordeon = styled.div`
    position: relative;
    button {
        position: relative;
        left: -1.5rem;
        width: 100vw;
        background: transparent;
        text-align: left;
        cursor: pointer;
        padding: 0;
        border: none;
        /* border-top: 1px solid grey; */
        border-bottom: 1px solid grey;
        p {
            margin: 0.5em 0;
        }
    }
    section {
    }
`
