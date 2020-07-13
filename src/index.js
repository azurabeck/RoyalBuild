import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore , getFirestore } from 'redux-firestore'
import { reactReduxFirebase , getFirebase } from 'react-redux-firebase'
import fbConfig from './component-conf/fbConfig'

import './component-ui/styles/main.scss';
import App from './routes.js';
import rootReducer from './component-conf/store/reducers/rootReducer.js'


const store = createStore(rootReducer, 
     compose (
          applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
          reduxFirestore(fbConfig),
          reactReduxFirebase(fbConfig, {attachAuthIsReady: true , useFirestoreForProfile: true, userProfile: 'users'})
     )
);

store.firebaseAuthIsReady.then(() => {
     ReactDOM.render( <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
})
