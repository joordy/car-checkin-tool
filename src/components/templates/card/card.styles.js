import styled from 'styled-components'

export const Main = styled.main`
    height: calc(100vh);
    overflow: hidden;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 0 1.5em;
    h1 {
        margin-top: 1em;
    }
    p {
        max-width: 30em;
        margin-bottom: 0;
    }
    span {
        svg {
            stroke: white;
        }
    }
`
