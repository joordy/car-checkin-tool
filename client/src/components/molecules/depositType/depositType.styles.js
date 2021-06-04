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
        padding: 1.25rem 0 1.25rem 1.5rem;
        border: none;
        border-top: 1px solid grey;
    }
    .content-parent {
        height: 0px;
        overflow: hidden;
        transition: height ease 0.3s;
    }
    /* .content-parent.show {
        height: auto;
    } */
`
