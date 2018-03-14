import axios from 'axios';
const API_URL = process.env.API_URL;

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

// Get UserID to Login
export const startLogin = ({ userAccount, password }) => {
    return (dispatch) => {
        console.log(API_URL);
        return axios.post(`${API_URL}/api/Users/auth`, { userAccount, password }).then((response) => {
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
        return axios.post(`${API_URL}/api/Users/adduser`, user)
        .catch((e) => {
            alert('Network Error, Sorry try again later');
        })
    }
}