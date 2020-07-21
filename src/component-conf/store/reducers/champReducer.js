const initState = {}

const champReducer = (state = initState, action) => {
    switch (action.type) { 
        case 'CREATE_CHAMP':
            console.log('create champ', action.champ)
            return state;
        case 'CREATE_CHAMP_ERROR':
            console.log('create champ error', action.err)
            return state;
        default:
            return state
     }
}

export default champReducer