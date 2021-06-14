import styled from 'styled-components'
import { device } from 'styles/devices'

export const Section = styled.section`
    width: calc(100vw - 3rem);
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

export const ImageChecker = styled.article`
    position: relative;
    left: -1.5rem;
    width: 100vw;
    height: calc(100% - 375px);
    margin: 2rem 0;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    @media ${device.laptop} {
        padding-top: 0.1em;
    }
    video {
        width: calc(100% - 3rem);
        height: calc(100% - 3rem);
        object-fit: cover;
        margin: 1.5rem;
        border-radius: 0.5em;
        @media ${device.laptop} {
            width: 40em;
            margin: 1.5rem auto 1.5rem auto;
            display: block;
        }
    }
    div {
        position: absolute;
        bottom: -4rem;
        left: 50%;
        transform: translateX(-50%);
        button {
            position: relative;
            bottom: 1.25em;
        }
    }
    > a,
    button {
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(50%);
    }
`
