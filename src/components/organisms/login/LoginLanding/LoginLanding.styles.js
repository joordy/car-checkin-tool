import styled from 'styled-components'
import * as colors from 'styles/colors'

export const LoginLanding = styled.section`
    header {
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(${colors.gradientLight} 0%, ${colors.gradientDark} 100%);
    }

    header > img {
        display: flex;
        margin: auto;
    }

    header > img:first-child {
        width: 155px;
        height: 30px;
        padding: 110px 0 50px;
    }

    header > img:nth-child(2) {
        width: 315px;
    }

    header > h1 {
        text-align: center;
        color: white;
    }
`
