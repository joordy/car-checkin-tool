import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Login = styled.section`
    .error {
        color: ${colors.error};
    }

    main {
        padding: 75px 25px;
    }

    main > h1 {
        line-height: 1.4em;
        color: ${colors.primaryText};
    }

    main > p {
        line-height: 1.4em;
        margin-top: 2vh;
        margin-bottom: 5vh;
    }

    main > form > input,
    main > form > div {
        width: 70vw;
    }

    main > form > label {
        margin: 4vh 0 1vh;
    }

    main > form > button,
    main > form > a {
        margin: auto;
    }

    main > form > button {
        position: absolute;
        bottom: 15vh;
        left: 50%;
        transform: translateX(-50%);
    }

    main > form > a {
        position: absolute;
        bottom: 5vh;
        left: 50%;
        transform: translateX(-50%);
    }

    @media only screen and (max-width: 320px) {
        main {
            padding: 25px;
        }

        main > form > button {
            position: relative;
            bottom: -2vh;
        }

        main > form > a {
            display: none;
        }
    }
`
