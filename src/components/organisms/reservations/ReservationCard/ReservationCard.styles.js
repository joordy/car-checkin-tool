import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Card = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    color: white;
    margin-bottom: 4em;
    &::after {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 10em;
        border-radius: 1.25em 1.25em 0 0;
        background: rgb(169, 220, 23);
        background: linear-gradient(132deg, rgba(169, 220, 23, 1) 0%, rgba(1, 133, 1, 1) 100%);
    }
    img {
        position: absolute;
        z-index: 1;
        left: 1.125em;
    }
    h3 {
        position: absolute;
        top: 1.125em;
        right: 1.125em;
        margin: 0;
    }
    article {
        color: ${colors.primaryText};
        position: relative;
        top: 3em;
        background-color: white;
        width: 100%;
        border-radius: 1.25em;
        padding: 2em 1.125em 1.125em 1.125em;
        box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        ul {
            margin: 0 0 0 0.5rem;
            padding: 0;
            list-style-type: none;
            li {
                > * {
                    margin: 0;
                    padding: 0;
                }
                h4 {
                    line-height: 1.4rem;
                    margin-bottom: 0.125em;
                    height: 1rem;
                }
                h5 {
                    height: 0.875rem;
                    font-weight: 300;
                    margin-bottom: 0.875rem;
                }
            }
        }
        div {
            width: 100%;
            margin-top: 1.25rem;
        }
    }
`
