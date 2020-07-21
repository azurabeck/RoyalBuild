export const createChamp = (champ) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        console.log(champ)

        firestore.collection('champs').add({
            ...champ, 
            champName: profile.name,
            champImg: profile.image,
            champClass: profile.champClass,
        }).then(() => {
            dispatch({ type: 'CREATE_CHAMP', champ })
        }).catch((err) => {
            dispatch({type: 'CREATE_CHAMP_ERROR', err})
        })
        
    }
}