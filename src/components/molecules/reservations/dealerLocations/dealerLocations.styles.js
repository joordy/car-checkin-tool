import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const Location = styled.ul`
    margin: 0 0 0 0.5rem;
    padding: 0;
    list-style-type: none;
    li {
        > * {
            margin: 0;
            padding: 0;
        }
        h4 {
            margin-bottom: 0.125em;
            height: 1rem;
        }
        h5 {
            height: 0.875rem;
            font-weight: 300;
            margin-bottom: 0.875rem;
            display: flex;
            span {
                width: 5px;
                margin: 0 0.25rem;
                display: grid;
                place-items: center;
            }
        }
    }

    @media ${device.laptop} {
        h4 {
            font-size: 1.1em;
            width: 100%;
        }
        h5 {
            margin: 0.5em 0;
            font-size: 1em;
        }
    }
`
