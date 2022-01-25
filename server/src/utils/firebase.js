const firebase = require('firebase-admin')
const firebaseKey = require('../private/firebaseKey')

firebase.initializeApp({
    credential: firebase.credential.cert(firebaseKey),
    databaseURL: 'https://project-itransition-default-rtdb.europe-west1.firebasedatabase.app'
})

module.exports = firebase