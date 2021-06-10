import styled from 'styled-components'
import * as colors from 'styles/colors'

export const Login = styled.section`
    .error {
        color: ${colors.error};
    }

    main {
        padding: 75px 25px;

        h1 {
            line-height: 1.4em;
            color: ${colors.primaryText};
        }

        .error {
            color: ${colors.error};
        }

        > p {
            line-height: 1.4em;
            margin-top: 2vh;
            margin-bottom: 3vh;
        }

        form {
            input,
            div {
                width: 70vw;
            }

            button,
            a {
                margin: auto;
            }

            label {
                margin: 4vh 0 1vh;
            }

            button {
                position: absolute;
                bottom: 15vh;
                left: 50%;
                transform: translateX(-50%);
            }

            a {
                position: absolute;
                bottom: 5vh;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

    @media only screen and (max-width: 320px) {
        main {
            padding: 25px;

            form {
                button {
                    position: relative;
                    bottom: -2vh;
                }

                a {
                    display: none;
                }
            }
        }
    }
`
