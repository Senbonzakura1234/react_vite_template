import { action, makeAutoObservable } from 'mobx';
import User from '../model/User.model';

class UserStore {
    user: User = new User(); isLogin: boolean = false;

    constructor() { makeAutoObservable(this); }

    @action login(newUser: User) {
        this.user = newUser;
        this.isLogin = true;
    }

    @action logout() {
        this.user = new User();
        this.isLogin = false;
    }
}

export const UserContext = new UserStore();