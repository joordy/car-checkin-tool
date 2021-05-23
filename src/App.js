import React from 'react'
// import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom'

import { Header } from 'components/organisms/index'
import { PageOne, PageTwo } from 'components/templates/index'

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={PageOne} />
                <Route path="/Two" exact component={PageTwo} />
            </Switch>
        </>
    )
}

export default App
