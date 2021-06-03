import styled from 'styled-components'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    /* height: 100%; */
    max-height: 60vh;
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

export const ImageChecker = styled.article`
    position: relative;
    left: -1.5rem;
    width: 100vw;

    /* height: min(250px, 60vh); */
    margin: 2rem 0;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    video {
        width: calc(100% - 3rem);
        height: calc(100% - 3rem);
        object-fit: cover;
        /* background-color: rgba(255, 255, 255, 0.3); */
        /* border: 2px solid white; */
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
