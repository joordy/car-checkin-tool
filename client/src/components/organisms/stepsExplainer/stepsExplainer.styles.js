import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    min-width: calc(100vw);
    position: relative;
    overflow: hidden;
    article {
        background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
        width: 100%;
        height: 100vh;
        h1 {
            text-align: center;
            color: ${colors.white};
            padding-top: 3em;
            width: 7em;
            margin: 0 auto 1em auto;
            ${(props) => {
                if (props.step != 0)
                    return `
                    width: 10em;
                     `
            }}
        }
        ul {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 1rem 1.5rem 0 1.5rem;
            li {
                position: relative;
                margin-bottom: 2em;
                &:first-of-type,
                &:nth-of-type(2) {
                    &::after {
                        content: '';
                        width: 1px;
                        height: 35px;
                        background-color: white;
                        position: absolute;
                        left: 1.9em;
                        top: 4.3em;
                    }
                }
                &:nth-of-type(2) {
                    &::after {
                        height: 50px;
                    }
                }
            }
        }
    }
    > div {
        margin-left: 0;
    }
`
