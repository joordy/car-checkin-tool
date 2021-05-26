import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Header = styled.header`
    margin: 4.5rem 1rem 2rem;
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
        div {
            width: 100%;
            height: 100%;
            background-color: hotpink;
            border-radius: 2em;
        }
    }
`
