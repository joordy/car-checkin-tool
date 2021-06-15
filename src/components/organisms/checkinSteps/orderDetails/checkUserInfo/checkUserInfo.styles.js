import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 2.5rem 1.5rem 1.5rem;
    height: 100%;
    position: relative;
    overflow: hidden;
    header {
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
            }
            span {
                position: absolute;
                top: 0;
                right: 0;
            }
        }
    }
    hr {
        @media ${device.laptop} {
            margin: 0 3em;
            width: 30vw;
        }
    }
    article {
        @media ${device.laptop} {
            padding: 2em 3em 0 3em;
            width: 30vw;
        }
        &:nth-of-type(2) {
            display: block !important;
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                li {
                    display: flex;
                    justify-content: space-between;
                    line-height: 2em;
                }
            }
        }

        &:first-of-type {
            display: grid;
            grid-template-columns: 60% 40%;
            margin-top: 5vh;

            p:first-child {
                font-weight: 600;
            }
        }

        p {
            margin: 0.4em 0;

            &:nth-child(even) {
                text-align: right;
            }
        }
    }
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
