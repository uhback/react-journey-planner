const sharedJourenyDefaultState = [];

export default (state = sharedJourenyDefaultState, action) => {
    switch (action.type) {
        case 'SET_SHARED_JOURNIES':
            return action.sharedJournies;
        default:
            return state;
    }
}