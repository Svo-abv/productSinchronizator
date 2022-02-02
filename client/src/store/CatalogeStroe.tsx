import { makeAutoObservable } from 'mobx';
import React from 'react';

export interface ICataloge {

    id: number;
    name: string;
    uuid_1c: string;
    deleted?: boolean;
}

class CatalogeStore {

    _selectedCataloge: any;
    _cataloges: any = [{ id: 1 }];

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedCataloge(current: any) {
        this._selectedCataloge = current;
    }
    get selectedCataloge() {
        return this._selectedCataloge;
    }
    set(cataloges: any) {
        this._cataloges = cataloges;
    }
    get(): ICataloge[] {
        return this._cataloges;
    }

}

export default CatalogeStore;