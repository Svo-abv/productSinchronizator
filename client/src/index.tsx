import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import UserStore from './store/UserStore'

import 'bootstrap/dist/css/bootstrap.min.css';
import BrandStore from './store/BrandStroe';
import CatalogeStore from './store/CatalogeStroe';
import ProductStore from './store/ProductStore';

interface IContext {
    user: UserStore;
    brands: BrandStore;
    cataloges: CatalogeStore;
    products: ProductStore;
}

export const Context = createContext({
    user: new UserStore(),
    brands: new BrandStore(),
    cataloges: new CatalogeStore(),
    products: new ProductStore()
});

ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            brands: new BrandStore(),
            cataloges: new CatalogeStore(),
            products: new ProductStore()
        }
    }>
        <Main />
    </Context.Provider>
    , document.getElementById('root'));