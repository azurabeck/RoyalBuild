export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                nickname: newUser.nickname,
                favoriteClass: newUser.favoriteClass,
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword (
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

// export const signInWithGoogle = () => {
//     return (dispatch, getState, { getFirebase }) => {
//         const firebase = getFirebase();
//         const provider = new firebase.auth.GoogleAuthProvider();
       
//         firebase.auth().signInWithPopup(provider)
//         .then(() => {
//             dispatch({type: 'SIGN_IN_SUCCESS'})
//         }).catch((err) => {
//             dispatch({type: 'SIGN_IN_ERROR', err})
//         })
//     }
// }

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}


export const deleteUser = (userId) => {
    return (dispatch, getState, { getFirebase, getFirestore })  => {
        
        const firebase = getFirebase();
        const user = firebase.auth().currentUser
        const firestore = getFirestore();

        firestore.collection('users').doc(userId).delete()

        user.delete().then(() => {            
            dispatch({type: 'DELETE_USER_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'DELETE_USER_ERROR', err})
        })
    }
}