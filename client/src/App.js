import {
    Reservations,
    Login,
    Deposit,
    QR,
    AdressData,
    UserVerification,
} from 'components/templates/index'
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import GlobalStyle from './styles/global'

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/reservations" exact component={Reservations} />
                <Route path="/addressdata" exact component={AdressData} />
                <Route path="/verification" exact component={UserVerification} />
                <Route path="/deposit" exact component={Deposit} />
                <Route path="/qr" exact component={QR} />
                {/*<Route path="/One" exact component={PageOne} />
                <Route path="/Two" exact component={PageTwo} />*/}
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default App
