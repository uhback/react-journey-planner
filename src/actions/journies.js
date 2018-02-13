import axios from 'axios';
const ROOT_URL = "http://localhost:1813";

// Add Journey
export const addJourney = (journey) => ({
    type: 'ADD_JOURNEY',
    journey
});

// Add Journey in DB and dispatch
export const startAddJourney = (journey) => {
    return (dispatch) => {
        return axios.post(`${ROOT_URL}/api/journey/addMyjourney`, journey).then((ref) => {
            dispatch(addJourney({
                JourId: ref.data,
                ...journey
            }));
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const editJourney = (JourId, updates) => ({
    type: 'EDIT_JOURNEY',
    JourId,
    updates
})

export const startEditJourney = (JourId, updates) => {
    return (dispatch) => {
        return axios.put(`${ROOT_URL}/api/journey/updatejourney/${JourId}`, updates).then(() => {
            dispatch(editJourney({
                JourId,
                ...updates
            }));
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const deleteJourney = ({ JourId } = {}) => ({
    type: 'DELETE_JOURNEY',
    JourId
})

export const startDeleteJourney = ({ JourId } = {}) => {
    return (dispatch) => {
        return axios.patch(`${ROOT_URL}/api/journey/deletejourney/${JourId}`).then(() => {
            dispatch(deleteJourney({ JourId }));
        })
    }
}

export const setMyJourney = (journies) => ({
    type: 'SET_MY_JOURNEY',
    journies
});

export const startSetMyJourney = () => {
    // access dispatch by the redux lib.
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // promise gets returned allow us to have access "then"
        return axios.get(`${ROOT_URL}/api/journey/myjourney/${uid}`, uid).then((snapshot) => {
            const journies = [];
            
            snapshot.data.forEach((childSnapshot) => {
                journies.push({                    
                    ...childSnapshot
                })
            })
            // data in redux
            dispatch(setMyJourney(journies));
        })
    }
}