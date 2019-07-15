import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Main from './pages/main/index'
import details from './pages/details/details'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route  exact path='/' component={Main} />
        <Route path='/details'  component={details} />
    </Switch>
    </BrowserRouter>
)

export default Routes