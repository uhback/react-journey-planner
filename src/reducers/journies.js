const journeyReducerDefaultState = [];

export default (state = journeyReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_JOURNEY':
            return [...state, action.journey]
        case 'EDIT_JOURNEY':
            return state.map((journey) => {
                if (journey.jourID === action.jourID) {
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