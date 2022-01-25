import firebase from 'utils/firebase'

export default async function signIn(email, password) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            throw { message: 'errWrongLogin' }
        } else {
            throw error
        }
    }
}
