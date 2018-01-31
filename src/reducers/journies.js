const journeyReducerDefaultState = [];

export default (state = journeyReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_JOURNEY':
            return [...state, action.journey]
        default:
            return state;
    }
}