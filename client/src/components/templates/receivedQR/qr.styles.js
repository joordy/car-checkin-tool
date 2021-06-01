import styled from 'styled-components'

export const Main = styled.main`
    height: calc(100vh);
    width: 100vw;
    overflow: hidden;
    div.stepsWrapper {
        max-height: 100%;
        display: flex;
        flex-flow: row nowrap;
        width: 100vw;
        transition: 0.2s ease;
        > section {
            flex-shrink: 0;
        }
    }
`
