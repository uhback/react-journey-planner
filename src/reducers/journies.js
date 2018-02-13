const journeyReducerDefaultState = [];

export default (state = journeyReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_JOURNEY':
            return [...state, action.journey]
        case 'DELETE_JOURNEY':
            return state.filter(journey => journey.JourId !== action.JourId)
        case 'EDIT_JOURNEY':
            return state.map((journey) => {
                if (journey.JourId === action.JourId) {
                    return {
                        ...journey,
                        ...action.updates
                    }
                } else {
                    return journey;
                }
            })
        case 'SET_MY_JOURNEY':
            return action.journies;
        default:
            return state;
    }
}