import styled from 'styled-components'
import * as colors from 'styles/colors'

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
                width: 155px;
                height: 30px;
                padding: 15vh 0 5vh;
            }
            &:nth-child(2) {
                width: 70vw;
            }
        }
        h1 {
            text-align: center;
            color: white;
            margin-top: 5vh;
            line-height: 1.4em;
        }
        p {
            text-align: center;
            color: white;
            margin: 2vh 4em 0;
            line-height: 1.4em;
        }
        button {
            position: absolute;
            bottom: 10vh;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .slideOut {
        transition: 1s ease-in;
        transform: translateY(-100%);
    }
`
