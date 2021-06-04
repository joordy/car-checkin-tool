import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    width: calc(100vw - 3rem);
    padding: 2.5rem 1.5rem 1.5rem;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
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
        margin-bottom: 8rem;
        article {
            &:nth-of-type(2) {
                position: relative;
                h2 {
                    position: relative;
                    left: -1.5rem;
                    width: 100vw;
                    /* border-top: 1px solid grey; */
                    padding: 0 0 0.75rem 1.5rem;
                }
            }
        }
    }
`

export const DepositForm = styled.form`
    padding-bottom: 2rem;
    width: 100%;
    > fieldset {
        border: none;
        padding: 0.5em 0;
        overflow: hidden;
        margin: 0;
        margin-inline: unset;
        padding-inline: unset;
        &:nth-of-type(3) {
            display: flex;
            flex-direction: row;
            div {
                margin-right: 1rem;
                > input {
                    width: 3rem;
                }
            }
        }
        label {
            margin-bottom: 0.5rem;
        }
        > input {
            width: calc(100% - 3.2rem);
            margin: 0;
        }
    }
    button {
        margin-top: 1rem;
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
