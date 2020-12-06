import Axios from 'axios'
import { UserContext } from '../database/UserStore.mobx';

Axios.interceptors.request.use((req) => {
    if(UserContext.isLogin) req.headers.Authorization = `Bearer ${UserContext.user.token}`;
    return req;
});

Axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        throw error;
    }
);