import {
    PageOne,
    PageTwo,
    Reservations,
    Login,
    Checkin,
    Deposit,
    QR,
} from 'components/templates/index'
import React from 'react'
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from './styles/global'

function App() {
    console.log(`ENV: ${process.env.REACT_APP_TEST}`)
    return (
        <>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/reservations" exact component={Reservations} />
                <Route path="/checkin" exact component={Checkin} />
                <Route path="/deposit" exact component={Deposit} />
                <Route path="/qr" exact component={QR} />
                <Route path="/One" exact component={PageOne} />
                <Route path="/Two" exact component={PageTwo} />
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default App
