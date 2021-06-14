import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 2.5rem 1.5rem 1.5rem;
    position: relative;
    overflow: hidden;
    header {
        position: relative;
        margin-bottom: 2em;
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
    section {
        ol {
            padding-left: 1.5em;
        }
        @media ${device.laptop} {
            padding: 0 3em;
        }
    }
`

export const ImageChecker = styled.article`
    position: relative;
    left: -1.5rem;
    width: 100vw;
    height: calc(100% - 350px);
    margin: calc(2rem + 18px) 0 2rem;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    video {
        width: calc(100% - 3rem);
        height: calc(100% - 3rem);
        object-fit: cover;
        margin: 1.5rem;
    }
    div {
        position: absolute;
        bottom: -4rem;
        left: 50%;
        transform: translateX(-50%);
        a {
            position: relative;
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
