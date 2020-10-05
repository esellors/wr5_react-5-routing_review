import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Characters from './Components/Characters/Characters';
import Character from './Components/Character/Character';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/characters/:id' component={Character} />
        <Route path='/characters' component={Characters} />
    </Switch>
)