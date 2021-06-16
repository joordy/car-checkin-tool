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
    img {
        width: 125px;
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
        > div {
            display: flex;
            width: 100%;
            > section > div {
                width: 50% !important;
            }
        }
        ul {
            margin-left: 3em;
            display: flex;
            gap: 3.5em;
            width: 100%;
            li:last-of-type::before {
                content: '';
                position: absolute;
                width: 3em;
                height: 1px;
                margin: 0.5em 0 0 -3.2em;
                background-color: lightgrey;
            }
        }
    }
`

export const StatusCheck = styled.section`
    border-top: 1px solid ${colors.inputBorder};
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    > div {
        margin: 0 3rem;
        display: flex;
        h4 {
            margin: 1rem 0 0 0;
        }
        p {
            display: block;
            margin: 1rem 0 1rem 1rem;
        }
    }
    ul {
        list-style-type: none;
        margin: 0 0 1rem 0;
        padding: 0;
        li {
            width: 20% !important;
            text-align: center;
            div.wrapper {
                display: flex;
                align-items: center;
                > div {
                    width: 2.5rem;
                    height: 2.5rem;
                    margin: 0.5rem 1rem 0.5rem 0;
                    background-color: ${colors.inputBorder};
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    svg {
                        width: 80%;
                        path {
                            stroke: white;
                        }
                    }
                }
                p {
                    color: ${colors.inputBorder};
                    margin: 0;
                }
            }
            &:last-of-type::before {
                height: 0 !important;
            }
            &:nth-of-type(2) {
                div.wrapper {
                    > div {
                        svg {
                            stroke: white;
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
        }
    }
`
