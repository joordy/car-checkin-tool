import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 2.5rem 1.5rem 1.5rem;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    header {
        margin-bottom: 2rem;
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
    main {
        margin: 0 0 10rem 0;
        article {
            @media ${device.laptop} {
                padding: 0 3em 0 3em;
            }
            &.card-error {
                padding: 2em;
                @media ${device.laptop} {
                    margin-left: 1.5em;
                    width: 26em;
                }
            }
            &.result-message {
                padding: 2em;
                @media ${device.laptop} {
                    margin-left: 1.5em;
                    width: 26em;
                }
            }
            &:nth-of-type(2) {
                position: relative;
                h2 {
                    position: relative;
                    left: -1.5rem;
                    width: 100vw;
                    padding: 0 0 0.75rem 1.5rem;
                }
                > div {
                    div#card-element {
                        margin-top: 1em;
                        @media ${device.laptop} {
                            margin-left: 1.5em;
                            width: 30em;
                        }
                    }
                    button {
                        @media ${device.laptop} {
                            left: 0;
                            width: 85vw;
                        }
                        &#submit {
                            @media ${device.laptop} {
                                margin-left: 1.5em;
                                width: 30em;
                            }
                        }
                    }
                    &:last-of-type {
                        > div {
                            position: relative;
                            left: -1.5rem;
                            border-bottom: 1px solid grey;
                            width: calc(100% + 3rem);
                            @media ${device.laptop} {
                                left: 0;
                                width: 85vw;
                            }
                            p {
                                /* color: hotpink; */
                                padding: 0 1.5rem;
                                margin-bottom: -1rem;
                            }
                        }
                    }
                }
            }
        }
    }
`

export const DepositForm = styled.form`
    padding-bottom: 2rem;
    width: 100%;
`

export const BtnWrapper = styled.article`
    width: calc(100% - 3rem);
    position: absolute;
    bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    a {
        &:nth-of-type(1) {
            margin-right: 0.5rem;
        }
        :nth-of-type(0) {
            margin-left: 0.5rem;
        }
    }
`
