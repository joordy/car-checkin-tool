import styled from 'styled-components'
import { device } from 'styles/devices'

export const MsgWrapper = styled.div`
    background-color: rgba(255, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 1em;
    display: flex;
    svg {
        padding: 1em;
    }

    @media ${device.tablet} {
        margin-top: -3.5em;
        position: absolute;
    }
`
