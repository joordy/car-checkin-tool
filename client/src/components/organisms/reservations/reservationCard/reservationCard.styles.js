import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Card = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    color: white;
    margin-bottom: 4em;
    &::after {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 10em;
        border-radius: 1.25em 1.25em 0 0;
        background: rgb(169, 220, 23);
        background: linear-gradient(132deg, rgba(169, 220, 23, 1) 0%, rgba(1, 133, 1, 1) 100%);
    }
    img {
        position: absolute;
        z-index: 1;
        left: 1.125em;
        width: 125px;
    }
    h3 {
        position: absolute;
        top: 0.825em;
        right: 1.125em;
        margin: 0;
    }
    article {
        color: ${colors.primaryText};
        position: relative;
        top: 3em;
        background-color: white;
        width: 100%;
        border-radius: 1.25em;
        padding: 2em 1.125em 1.125em 1.125em;
        box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        span {
            svg {
                margin-top: 0.25rem;
            }
        }
    }
`

export const StatusCheck = styled.div`
    border-top: 1px solid ${colors.inputBorder};
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    h4 {
        margin: 1rem 0 0 0;
    }
    p {
        margin: 0.25rem 0 1rem 0;
    }
    ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        margin: 0 0 1rem 0;
        padding: 0;
        li {
            text-align: center;
            width: 33%;
            div.wrapper {
                > div {
                    width: 3rem;
                    height: 3rem;
                    margin: 0.5rem auto 0.5rem auto;
                    background-color: ${colors.inputBorder};
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    svg {
                        path {
                            stroke: white;
                        }
                    }
                }
                p {
                    color: ${colors.inputBorder};
                }
            }
            &:nth-of-type(1),
            &:nth-of-type(2) {
                div.wrapper {
                    > div {
                        &:after {
                            content: '';
                            position: absolute;
                            width: 50px;
                            height: 2px;
                            background-color: ${colors.inputBorder};
                            left: 110%;
                        }
                    }
                }
            }
            &:nth-of-type(2) {
                div.wrapper {
                    > div {
                        svg {
                            fill: white;
                            stroke: transparent;
                        }
                    }
                }
            }
            div.active {
                > div {
                    background-color: ${colors.secondary};
                }
                p {
                    color: ${colors.secondary};
                }
            }
            /*
            p {
                color: ${colors.inputBorder};
                margin: 0;
            }
            div {
                &.active {
                    background-color: ${colors.secondary};
                }
                svg {
                    path {
                        stroke: white;
                    }
                }
            } */
        }
    }
`
