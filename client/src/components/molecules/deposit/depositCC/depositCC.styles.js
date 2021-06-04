import styled from 'styled-components'
import * as colors from 'styles/colors'

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
