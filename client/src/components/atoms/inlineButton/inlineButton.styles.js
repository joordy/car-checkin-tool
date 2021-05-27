import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Button = styled.p`
    font-size: 1em;
    color: ${colors.secondaryText};
    a {
        font-weight: 700;
        color: ${colors.accent};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`
