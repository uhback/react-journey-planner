
// export const logout = () => {
//     type: 'LOGOUT'
// }

import axios from 'axios';
const ROOT_URL = "http://localhost:14655";

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

// Get UserID to Login
export const startLogin = ({ userAccount, password }) => {
    return (dispatch) => {
        return axios.post(`${ROOT_URL}/api/login`, { userAccount, password }).then((response) => {
            dispatch(login(response.data));
        }).catch((e) => {
            console.log(e)
        })
    }
}


export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return (dispatch) => {
        return dispatch(logout());
    }
}