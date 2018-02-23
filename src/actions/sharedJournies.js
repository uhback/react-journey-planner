import axios from 'axios';
const ROOT_URL = "http://localhost:1813";

export const setSharedJournies = (sharedJournies) => ({
    type: 'SET_SHARED_JOURNIES',
    sharedJournies
});

export const startSetSharedJournies = () => {
    // access dispatch by the redux lib.
    return (dispatch, getState) => {
        return axios.get(`${ROOT_URL}/api/journey/sharedjourney`).then((snapshot) => {
            const sharedJournies = [];

            snapshot.data.forEach((childSnapshot) => {
                sharedJournies.push({                    
                    ...childSnapshot
                })
            })
            dispatch(setSharedJournies(sharedJournies));
        })
    }
}