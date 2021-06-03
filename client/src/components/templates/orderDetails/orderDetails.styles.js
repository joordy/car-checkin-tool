import styled from 'styled-components'

export const Main = styled.main`
    position: relative;
    top: 0px;
    height: calc(100vh - 7em);
    display: block;
    overflow: hidden;
    label {
        margin-top: 1em;
    }
    div.stepsWrapper {
        height: inherit;
        display: flex;
        flex-flow: row nowrap;
        width: 100vw;
        transition: 0.2s ease;
        > section {
            flex-shrink: 0;
        }
    }
`
