import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Home from '../Activies/Home';
import Scan from '../Activies/Scan';
import Success from '../Activies/Success';


export default function index() {
    return (
        <Switch>
            <Route exact path="/" key={1} component={Home}/>
            <Route exact path="/scan" key={2} component={Scan}/>
            <Route exact path="/success" key={3} component={Success}/>
        </Switch>
    )
}
