import { makeAutoObservable } from 'mobx';
import React from 'react';
import { runInThisContext } from 'vm';

export interface IBrand {
    id: number;
    name: string;
    uuid_1c: string;
    deleted: boolean;
}

class BrandStore {
    _selectedBrand: any;
    _brands: any = [{ id: 1 }];

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedBrand(current: any) {
        this._selectedBrand = current;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
    set(brands: any) {
        this._brands = brands;
    }
    get(): IBrand[] {
        return this._brands;
    }

}

export default BrandStore;