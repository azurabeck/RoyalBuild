const initState = {
    warrior: true, hunter: true, mage: true, tank: true, healer: true, assassin: true
}

const champReducer = (state = initState, action) => {
    switch (action.type) { 
        case 'CAT_FILTER':
            console.log('create cat', action.payload)
            return state;
        case 'CAT_FILTER_ERROR':
            console.log('create cat error', action.err)
            return state;
        default:
            return state
     }
}

export default champReducer