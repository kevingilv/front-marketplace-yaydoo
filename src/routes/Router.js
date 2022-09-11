import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Login from '../modules/login/login';
import MainContainer from '../modules/mainContainer/MainContainer'
import ProductsContainer from '../modules/products/Products';
import MainInventory from '../modules/inventory/MainInventory';
import CreateProduct from '../modules/products/CreateProduct';
import CreateUser from '../modules/login/CreateUser';
import ManageInventory from '../modules/inventory/ManageInventory';

const Main = () => (
    <main>
        <BrowserRouter>
            <MainContainer>
                <Switch>
                    <Route exact path='/products' component={ProductsContainer} />
                    <Route exact path='/create-product' component={CreateProduct} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/create-user' component={CreateUser} />
                    <Route exact path='/inventory' component={MainInventory} />
                    <Route exact path='/manage-inventory' component={ManageInventory} />
                    <Redirect to='/inventory' />
                </Switch>
            </MainContainer>
        </BrowserRouter>
    </main >
)

export default Main;