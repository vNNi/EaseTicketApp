import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Home from '../Activies/Home';
import Scan from '../Activies/Scan';

export default function index() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/scan" component={Scan}/>
        </Switch>
    )
}
