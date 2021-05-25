import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    h1 {
        text-align: center;
        color: ${colors.white};
        padding-top: 2em;
        width: 7em;
        margin: 0 auto;
    }
    ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1em 2.5vw 0 2.5vw;
        li {
            position: relative;
            margin-bottom: 1.5em;
            &:first-of-type,
            &:nth-of-type(2) {
                &::after {
                    content: '';
                    width: 1px;
                    height: 55px;
                    background-color: white;
                    position: absolute;
                    left: 1.9em;
                    top: 4.3em;
                }
            }
            &:nth-of-type(2) {
                margin-bottom: 2em;
                &::after {
                    height: 45px;
                }
            }
        }
    }
    a {
        &:first-of-type {
            margin: 4.5em auto 1em auto;
        }
        &:last-of-type {
            margin: 1em auto 0 auto;
        }
    }
    width: 100vw;
    height: 66.5vh;
    min-height: 35.5em;
    margin-bottom: 12em;
    border-radius: 0 0 50px 50px;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
`
