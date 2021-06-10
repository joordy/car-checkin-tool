import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Wrapper = styled.li`
    padding-left: 1em;
    margin-bottom: 1.5em;
    p {
        &:last-of-type {
            display: inline-flex;
            align-items: center;
            margin: 0;
            color: ${colors.secondaryText};
            &.success {
                color: ${colors.secondary};
                svg {
                    stroke: ${colors.secondary};
                }
            }
            &.skip {
                color: ${colors.warning};
            }
            svg {
                margin-right: 0.8em;
            }
        }
    }
`
