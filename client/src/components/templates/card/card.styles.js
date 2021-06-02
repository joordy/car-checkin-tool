import styled from 'styled-components'

export const Main = styled.main`
    height: calc(100vh);
    width: 100vw;
    overflow: hidden;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    h1 {
        margin-top: 1em;
    }
    span {
        svg {
            stroke: white;
        }
    }
`
