import { Switch, Route } from 'react-router-dom';
import Products from './components/Prodcuts/Products';
import Cart from './components/Cart/Cart';

export default (
    <Switch>
        <Route component={Products} exact path='/' />
        <Route component={Cart} exact path='/cart' />
    </Switch>
)