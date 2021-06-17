import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Header = styled.header`
    margin: 3rem 1rem 2rem;
    width: calc(100% - 2rem);
    position: relative;
    h1 {
        height: 2.25rem;
        vertical-align: middle;
    }
    p {
        margin: 3rem 0 0;
    }
    div {
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 0;
        right: 0;
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

        div {
            width: 100%;
            height: 100%;
            background-color: hotpink;
            border-radius: 2em;
        }
    }
`
