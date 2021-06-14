import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 2.5rem 1.5rem 1.5rem;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    text-align: center;
    color: ${colors.white};
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
        @media ${device.laptop} {
            padding: 0 25vw;
        }

        @media ${device.laptopL} {
            padding: 0 35vw;
        }
        section {
            text-align: left;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0 1em;
            margin-bottom: 1.6em;
            div {
                &:nth-of-type(2),
                :nth-of-type(4) {
                    text-align: right;
                    h3 {
                        &::after {
                            content: '';
                            width: 7em;
                            height: 2px;
                            background-color: ${colors.primary};
                            position: absolute;
                            top: 1.3em;
                            right: 0;
                        }
                    }
                }
                &:nth-of-type(1),
                :nth-of-type(3) {
                    h3 {
                        &::after {
                            content: '';
                            width: 7em;
                            height: 2px;
                            background-color: ${colors.primary};
                            position: absolute;
                            top: 1.3em;
                            left: 0;
                        }
                    }
                }
                h3 {
                    position: relative;
                }
            }
        }
        img {
            width: 12em;
            display: block;
            margin: 0 auto;
            &:not(#wallet img) {
                width: 8em;
                background-color: ${colors.white};
                padding: 1em;
                border-radius: 0.6em;
                margin: 0 auto 1em auto;
            }
        }
    }
`
