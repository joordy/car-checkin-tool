import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 4.5rem 1.5rem 1.5rem;
    height: 100%;
    position: relative;
    overflow: hidden;
    header {
        margin-bottom: 3em;
        &:nth-of-type(1) {
            position: relative;
            h1 {
                width: 70%;
            }
            p {
                width: 100%;
            }
            span {
                position: absolute;
                top: 0;
                right: 0;
            }
        }
    }
`
