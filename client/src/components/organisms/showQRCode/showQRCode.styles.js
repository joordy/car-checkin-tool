import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 4.5rem 1.5rem 1.5rem;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    text-align: center;
    header {
        margin-bottom: 2em;
        &:nth-of-type(1) {
            position: relative;
            h1 {
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
    article {
        section {
            text-align: left;
            display: grid;
            grid-template-columns: 1fr 1fr;
            div {
                &:nth-of-type(2),
                :nth-of-type(4) {
                    text-align: right;
                }
            }
        }
        img {
            width: 12em;
        }
    }
`
