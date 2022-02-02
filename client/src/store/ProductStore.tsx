import { makeAutoObservable } from 'mobx';
import React from 'react';

export interface IProduct {

    id: number;
    name: string;
    code: string;
    uuid_1c: string;
    img: string;
    brandId: number;
    catalogId: number;
    deleted: boolean;
}

class ProductStore {

    _products: any = [{ id: 1 }];

    constructor() {

        makeAutoObservable(this);
    }

    set(products: any) {
        this._products = products;
    }
    get(): IProduct[] {
        return this._products;
    }

}

export default ProductStore;