import authReducer from './authReducer'
import champReducer from './champReducer'

import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    champ: champReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer