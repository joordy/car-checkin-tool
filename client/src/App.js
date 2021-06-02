import {
    Reservations,
    Login,
    Deposit,
    QRCode,
    OrderDetails,
    Verification,
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
                <Route path="/order-details" exact component={OrderDetails} />
                <Route path="/verification" exact component={Verification} />
                <Route path="/deposit" exact component={Deposit} />
                <Route path="/qr" exact component={QRCode} />
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default App
