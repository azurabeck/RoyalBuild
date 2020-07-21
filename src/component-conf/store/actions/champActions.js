export const createChamp = (champ) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();

        firestore.collection('champs').add({
            ...champ, 
        }).then(() => {
            dispatch({ type: 'CREATE_CHAMP', champ })
        }).catch((err) => {
            dispatch({type: 'CREATE_CHAMP_ERROR', err})
        })
        
    }
}