import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 2.5rem 1.5rem 1.5rem;
    height: 100%;
    position: relative;
    overflow: hidden;
    > .testje {
        height: 100%;
    }
    header {
        margin-bottom: 2em;
        @media ${device.laptop} {
            padding: 2em 3em 0 3em;
        }
        &:nth-of-type(1) {
            position: relative;
            h1 {
                width: 70%;
            }
            p {
                width: 100%;
                @media ${device.laptop} {
                    width: 45em;
                    margin-bottom: 3em;
                }
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
            p {
                margin-bottom: 2em;
            }
        }
        @media ${device.laptop} {
            padding: 0 3em 0 3em;
        }
    }
    form {
        margin-bottom: 4em;
        label {
            &:first-of-type {
                margin-bottom: 1.5em;
            }
        }
    }
    .progress {
        text-align: center;
    }
`
