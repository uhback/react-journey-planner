import axios from 'axios';
const API_URL = process.env.API_URL;

export const setSharedJournies = (sharedJournies) => ({
    type: 'SET_SHARED_JOURNIES',
    sharedJournies
});

export const startSetSharedJournies = () => {
    // access dispatch by the redux lib.
    return (dispatch, getState) => {
        return axios.get(`${API_URL}/api/Journeys/sharedjourney`).then((snapshot) => {
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