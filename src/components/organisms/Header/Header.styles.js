import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    top: 0;
    background-color: #eeeeef;
    border-bottom: 0.5px solid #161616;
    z-index: 1;
    width: calc(100% - 1em);
    padding: 0.5rem;
    @media screen and (min-width: 600px) {
        padding: 0.5rem 5rem;
        width: calc(100% - 10em);
    }
    h1 {
        line-height: 38px;
        margin: 0;
        padding: 0;
    }
`

export const Navigation = styled.nav`
    display: none;
    justify-content: space-between;
    @media screen and (min-width: 300px) {
        display: flex;
    }
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 0;
    padding: 0;
    li {
        display: flex;
        text-decoration: none;
        padding: 10px;

        > * {
            color: #161616;
        }
    }
`
