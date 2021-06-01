import {
    Reservations,
    Login,
    Deposit,
<<<<<<< HEAD
    QR,
    OrderDetails,
    Verification,
=======
    QRCode,
    AdressData,
    UserVerification,
>>>>>>> baa78debaef6aecf75444685c0c51e7bf0b6acab
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
<<<<<<< HEAD
                <Route path="/qr" exact component={QR} />
=======
                <Route path="/qr" exact component={QRCode} />
                {/*<Route path="/One" exact component={PageOne} />
                <Route path="/Two" exact component={PageTwo} />*/}
>>>>>>> baa78debaef6aecf75444685c0c51e7bf0b6acab
            </Switch>
            <GlobalStyle />
        </>
    )
}

export default App
