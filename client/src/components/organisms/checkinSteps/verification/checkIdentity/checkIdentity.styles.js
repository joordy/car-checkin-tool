import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    /* height: 100%; */
    padding: 2.5rem 1.5rem 1.5rem;
    position: relative;
    overflow: hidden;
    header {
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
`

export const IdentityChecker = styled.article`
    position: relative;
    left: -1.5rem;
    width: 100vw;
    height: calc(100% - 350px);
    margin: 2rem 0;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
`

export const LoadingBtn = styled.button`
    padding: 1.5rem;
    background-color: transparent;
    margin: 3rem 3rem;
    width: calc(100% - 6rem);
    height: calc(100% - 6rem);
    border-radius: 1rem;
    border: none;
    color: white;
    svg {
        path {
            fill: transparent;
            stroke: white;
        }
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
