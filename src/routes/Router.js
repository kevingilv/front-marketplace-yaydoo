import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Login from '../modules/login/login';
import MainContainer from '../modules/mainContainer/MainContainer'
import Products from '../modules/Products';
import MainInventory from '../modules/inventory/MainInventory';
// import Inventory from '../modules/inventory/Inventario';

const Main = () => (
    <main>
        <BrowserRouter>
            <MainContainer>
                <Switch>
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/inventory' component={MainInventory} />
                    <Redirect to='/products' />
                </Switch>
            </MainContainer>
        </BrowserRouter>
    </main >
)

export default Main;