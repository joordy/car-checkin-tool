import { PageOne, PageTwo, Reservations, Login, Checkin, Deposit } from 'components/templates/index'
import React from 'react'
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from './styles/global'

function App() {
    console.log(`ENV: ${process.env.REACT_APP_TEST}`)
    return (
        <>
            <Switch>
                <Route path="/" exact component={PageOne} />
                <Route path="/Two" exact component={PageTwo} />
                <Route path="/reservations" exact component={Reservations} />
                <Route path="/login" exact component={Login} />
                <Route path="/checkin" exact component={Checkin} />
                <Route path="/deposit" exact component={Deposit} />
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default App
