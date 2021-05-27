import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Section = styled.section`
    min-width: calc(100vw);
    position: relative;
    padding-bottom: 7rem;
    article {
        border-radius: 0 0 3.125rem 3.125rem;
        background: linear-gradient(0deg, #008500 0%, #9fce19 100%);
        width: 100%;
        h1 {
            text-align: center;
            color: ${colors.white};
            padding-top: 2em;
            width: 10em;
            margin: 0 auto;
        }
        ul {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 1rem 2.5rem 2rem 2.5rem;
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
    }
`

export const BtnWrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
    a {
        margin-bottom: 0.5rem;
    }
`