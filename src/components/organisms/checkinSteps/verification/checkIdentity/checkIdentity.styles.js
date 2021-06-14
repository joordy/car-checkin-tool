import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    /* height: 100%; */
    padding: 2.5rem 1.5rem 1.5rem;
    position: relative;
    overflow: hidden;
    header {
        position: relative;
        @media ${device.laptop} {
            padding: 2em 3em 0 3em;
        }
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
`

export const IdentityChecker = styled.article`
    position: relative;
    left: -1.5rem;
    width: 100vw;
    height: calc(100% - 350px);
    margin: 2rem 0;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    @media ${device.laptop} {
        padding-top: 0.1em;
    }
`

export const LoadingBtn = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: transparent;
    margin: 0 3rem 0 3rem;
    width: calc(100% - 6rem);
    height: calc(100%);
    border-radius: 1rem;
    border: none;
    color: white;
    svg {
        path {
            fill: transparent;
            stroke: white;
        }
    }
    div {
        margin: 0 auto;
    }
    p {
        margin: 0;
        &:first-of-type {
            font-weight: 700;
            font-size: 1.3em;
            margin: 1em 0 0.3em 0;
        }
    }
    button {
        margin: 2em auto 0 auto;
    }
`

export const StartBtn = styled.button`
    padding: 1.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 3rem 3rem;
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);
    border-radius: 1rem;
    border: 2px solid white;
    color: white;
    span {
        margin-bottom: 2rem;
    }
    svg {
        path {
            fill: transparent;
            stroke: white;
        }
    }
    &:hover {
        cursor: pointer;
    }
    @media ${device.laptop} {
        width: 40em;
        margin: 3rem auto 3rem auto;
        display: block;
    }
`

export const BtnWrapper = styled.article`
    width: 100%;
    margin: 6.425rem 0 0 0;
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
