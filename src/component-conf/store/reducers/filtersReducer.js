const INITIAL_STATE = { warrior: true, hunter: true, mage: true, tank: true, healer: true, assassin: true }

const champReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case 'CAT_FILTER':
            console.log('filter category', action.payload)
            return state;
        case 'CAT_FILTER_ERROR':
            console.log('filter category error', action.err)
            return state;
        default:
            return state
     }
}

export default champReducer