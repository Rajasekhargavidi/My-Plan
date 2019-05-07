export const createProject = (project) => {
    return (dispatch,getState, {getFirestore}) => {
        //make a async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Raj',
            authorLastName:'sekhar',
            authorId:1234,
            createdAt:new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT_SUCCESS'});
        }).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR'})
        });
        
    }
};