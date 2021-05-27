import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    min-width: calc(100vw - 3rem);
    position: relative;
    overflow: hidden;
    padding: 4.5rem 1.5rem 1.5rem;

    header {
        &:nth-of-type(1) {
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
    }

    article > p {
        margin: 0.4em 0;
    }

    article:nth-of-type(1),
    article:nth-of-type(3) {
        display: grid;
        grid-template-columns: 60% 40%;
    }

    article:nth-of-type(1) {
        margin-top: 5vh;
    }

    article:nth-of-type(3) {
        margin-top: 1vh;
    }

    article:nth-of-type(2),
    article:nth-of-type(4) {
        display: grid;
        grid-template-columns: 40% 60%;
    }

    article:nth-of-type(1) > p:first-child,
    article:nth-of-type(3) > p:first-child {
        font-weight: 600;
    }

    article:nth-of-type(1) > p:last-child,
    article:nth-of-type(3) > p:last-child {
        color: ${colors.accent};
    }

    article:nth-of-type(2) > p:nth-child(even),
    article:nth-of-type(4) > p:nth-child(even) {
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
