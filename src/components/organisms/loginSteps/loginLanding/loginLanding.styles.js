import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const LoginLanding = styled.section`
    header {
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(${colors.gradientLight} 0%, ${colors.gradientDark} 100%);
        z-index: 1;
        position: absolute;
        border-radius: 0 0 50px 50px;
        img {
            display: flex;
            margin: auto;
            &:first-child {
                width: 150px;
                height: 25px;
                padding: 6vh 0 4vh;
            }
            &:nth-child(2) {
                width: 60vw;
            }
        }
        h1 {
            text-align: center;
            color: white;
            margin: 2.5vh 0 5.5vh 0;
            font-size: 1.5em;
        }
        button {
            position: absolute;
            bottom: 5vh;
            left: 50%;
            transform: translateX(-50%);
        }
        ul {
            list-style-type: none;
            margin: 0 auto;
            padding: 0 3.5em;
            li {
                display: flex;
                margin-bottom: 1.5em;
                span {
                    margin-right: 1em;
                }
                div {
                    p {
                        margin: 0;
                        text-align: left;
                        color: white;
                        &:first-of-type {
                            font-weight: bold;
                            margin: 0 0 0.2em 0;
                        }
                    }
                    &:nth-of-type(2) {
                        margin: 0;
                    }
                }
            }
        }
    }
    .slideOut {
        transition: 1s ease-in;
        transform: translateY(-100%);
    }

    @media ${device.laptop} {
        /* header {
            display: flex;
            justify-content: space-evenly;
            > div {
                max-width: 40vw;
                margin-top: 200px;
                img {
                    width: 30vw !important;
                }
                ul {
                    max-width: 25vw;
                }
            }
        } */
    }
`
