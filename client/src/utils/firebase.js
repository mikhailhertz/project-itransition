import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config = {
    apiKey: 'AIzaSyBDhV7NcHMjVpPk11d4l3MwPIHSGxo_TkY',
    authDomain: 'project-itransition.firebaseapp.com',
    projectId: 'project-itransition',
    storageBucket: 'project-itransition.appspot.com',
    messagingSenderId: '294069904849',
    appId: '1:294069904849:web:151e730a57f80e8d962cf0',
    measurementId: 'G-LRJLC22QR0'
}

firebase.initializeApp(config)

export default firebase
