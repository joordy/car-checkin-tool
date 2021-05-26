import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 4.5rem 1.5rem 1.5rem;

    > span > svg {
        position: absolute;
        top: 4.5rem;
        left: 44rem;
    }

    article > p {
        margin: 0.4em 0;
    }

    article:first-of-type {
        display: grid;
        grid-template-columns: 60% 40%;
        margin-top: 5vh;
    }

    article:nth-of-type(2) {
        display: grid;
        grid-template-columns: 40% 60%;
    }

    article:first-of-type > p:first-child {
        font-weight: 600;
    }

    article:first-of-type > p:last-child {
        color: ${colors.accent};
    }

    article:nth-of-type(2) > p:nth-child(even) {
        color: ${colors.secondaryText};
    }

    article > p:nth-child(even) {
        text-align: right;
    }
`

export const BtnWrapper = styled.article`
    width: calc(100% - 3rem);
    position: absolute;
    bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    a {
        &:nth-of-type(1) {
            margin-right: 0.5rem;
        }
        :nth-of-type(0) {
            margin-left: 0.5rem;
        }
    }
`
