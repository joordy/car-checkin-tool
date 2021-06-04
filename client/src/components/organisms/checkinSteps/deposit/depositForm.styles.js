import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 2.5rem 1.5rem 1.5rem;
    height: 100%;
    position: relative;
    overflow: hidden;
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
    main {
        article {
            &:nth-of-type(1) {
                position: relative;
                h2 {
                    position: relative;
                    left: -1.5rem;
                    width: 100vw;
                    border-bottom: 1px solid grey;
                }
            }
        }
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
