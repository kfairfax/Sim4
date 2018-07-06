import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

export default (
    <Switch>
        <Route component={Products} exact path='/' />
        <Route component={Cart} path='/cart' />
    </Switch>
)