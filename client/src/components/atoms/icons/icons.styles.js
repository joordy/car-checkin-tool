import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Icon = styled.span`
    svg {
        width: ${(props) => props.width || '100%'};
        height: ${(props) => props.height || '100%'};
        opacity: ${(props) => props.opacity || '1'};
        path {
            fill: ${(props) => props.fill};
        }
    }
`
