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
        padding: 1.5em 2.5vw 0 2.5vw;
        li {
            position: relative;
            margin-bottom: 2em;
            &:first-of-type,
            &:nth-of-type(2) {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50px;
                    background-color: white;
                    position: absolute;
                    left: 1.9em;
                    top: 4.2em;
                }
            }
            &:nth-of-type(2) {
                &::after {
                    height: 35px;
                }
            }
        }
    }
    a {
        &:first-of-type {
            margin: 3em auto 1em auto;
        }
        &:last-of-type {
            margin: 1em auto 0 auto;
        }
    }
    div.buttons {
        padding: 0 0 1em;
    }
    width: 100vw;
    height: 65vh;
    min-height: 33em;
    margin-bottom: 8em;
    border-radius: 0 0 50px 50px;
    background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
`
