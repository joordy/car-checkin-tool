import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Container = styled.div`
    position: relative;
    overflow: hidden;
`

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
    section {
        article {
            &:nth-of-type(2) {
                display: block !important;
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    li {
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
            p {
                margin: 0.4em 0;

                &:nth-child(even) {
                    text-align: right;
                }
            }

            &:nth-of-type(1) {
                margin-top: 2rem;
            }

            &:nth-of-type(3) {
                margin-top: 1rem;
            }

            &:nth-of-type(1),
            &:nth-of-type(3) {
                display: grid;
                grid-template-columns: 60% 40%;

                p:first-child {
                    font-weight: 600;
                }
            }

            &:nth-of-type(2),
            &:nth-of-type(4) {
                display: grid;
                grid-template-columns: 40% 60%;

                p:nth-child(even),
                p:nth-child(even) {
                    color: ${colors.secondaryText};
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
