import { PageOne, PageTwo, Reservations, Login } from 'components/templates/index'
import React from 'react'
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from './styles/global'

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={PageOne} />
                <Route path="/Two" exact component={PageTwo} />
                <Route path="/reservations" exact component={Reservations} />
                <Route path="/login" exact component={Login} />
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default App
