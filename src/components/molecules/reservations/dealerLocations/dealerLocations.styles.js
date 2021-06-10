import styled from 'styled-components'
import * as colors from 'styles/colors'

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
`
