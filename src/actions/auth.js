import axios from 'axios';
const ROOT_URL = "http://localhost:1813";

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
            alert('Network Error, Sorry try again later');
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

// Get UserID to Login
export const startAddUser = (user) => {
    return (dispatch) => {
        return axios.post(`${ROOT_URL}/api/login/adduser`, user)
        .catch((e) => {
            alert('Network Error, Sorry try again later');
        })
    }
}