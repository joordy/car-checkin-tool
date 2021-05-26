import styled from 'styled-components'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 4.5rem 1.5rem 1.5rem;
    position: relative;
    article {
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
`

export const IdentityChecker = styled.article`
    position: relative;
    left: -1.5rem;
    width: 100vw;
    height: min(300px, 60vh);
    margin: 2rem 0;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
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
