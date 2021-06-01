import styled from 'styled-components'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    height: 100%;
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
    height: min(300px, 60vh);
    margin: 1.5rem 0 2rem;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    position: relative;
    video {
        width: 100%;
        height: 100%;
    }
    > * {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
    }
`
