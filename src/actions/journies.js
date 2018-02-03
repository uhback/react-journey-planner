// Add Journey
export const addJourney = (journey) => ({
    type: 'ADD_JOURNEY',
    journey
});

export const editJourney = ({ jourID, updates }) => ({
    type: 'EDIT_JOURNEY',
    jourID,
    updates
})