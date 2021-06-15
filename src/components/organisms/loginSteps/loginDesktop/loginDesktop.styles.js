import styled from 'styled-components'
import * as colors from 'styles/colors'
import { device } from 'styles/devices'

export const LoginDesktop = styled.section`
    ul {
        list-style-type: none;
    }

    header {
        height: 75vh;
        background-image: url('https://user-images.githubusercontent.com/55750107/121877972-7bc87080-cd0b-11eb-8238-414b3c284ddf.png');
        background-position: 0px -200px;
        background-size: cover;
        color: white;
        section {
            padding: 4em 0 4em 12em;
            width: calc(100% - 12em);
            height: calc(100% - 8em);
            background: linear-gradient(to top, rgba(0, 133, 0, 0.6), rgba(159, 206, 25, 0.6));
        }

        img {
            width: calc(12vw + 2em);
        }
        h1 {
            margin-top: 80px;
            max-width: 10em;
            font-size: 34px;
            line-height: 1.4em;
        }
        p {
            font-size: 21px;
            line-height: 1.5em;
            max-width: 15em;
        }
    }
    > div {
        margin: -6em auto 0;
        padding: 4em 4em 3em;
        height: 15vh;
        width: 75vw;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 4px 20px grey;
        form {
            .inputs {
                display: flex;
                margin: 0;
                padding: 0;
                gap: 5em;
                li {
                    width: 100%;
                    label {
                        margin-bottom: 1em;
                        font-size: 1.7em;
                    }
                    input,
                    div {
                        width: 90%;
                    }
                }
            }
            .buttons {
                display: flex;
                margin: -0.5em;
                padding: 0;
                gap: 5em;
                justify-content: flex-end;
            }
        }
        &::before {
            content: 'Inchecken';
            position: absolute;
            background-color: white;
            font-size: 20px;
            font-weight: bold;
            padding: 2em;
            border-radius: 20px 0 0 0;
            top: calc(75vh - 9em);
            left: calc(25vw / 2 - 3.2em);
        }
        .reservation {
            position: absolute;
            background-color: grey;
            font-size: 20px;
            font-weight: bold;
            padding: 2em 2em 1.05em;
            border-radius: 0 20px 0 0;
            color: whitesmoke;
            top: calc(75vh - 9em);
            left: calc(25vw / 2 + 5.9em);
            text-decoration: none;
        }
    }
`
