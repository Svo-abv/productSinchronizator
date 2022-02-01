import React from "react";
import { makeAutoObservable } from 'mobx'

export interface IUser {
    id: number;
    name: string;
    role: string;

}

class UserStore {

    _isAuth: boolean = false;
    _user: any = { name: '' };

    constructor() {
        makeAutoObservable(this);
    }

    set isAuth(status: boolean) {
        this._isAuth = status;

    }
    set user(_user: any) {
        this._user = _user;

    }
    get isAuth() {
        return this._isAuth;
    }
    get user(): IUser {
        return this._user;
    }

}

export default UserStore;