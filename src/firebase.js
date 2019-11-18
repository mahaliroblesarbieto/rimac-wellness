import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAU1TpzStOaD26fcdgtDbbV46hoYTfT8XE",
  authDomain: "chatbox-18806.firebaseapp.com",
  databaseURL: "https://chatbox-18806.firebaseio.com",
  projectId: "chatbox-18806",
  storageBucket: "chatbox-18806.appspot.com",
  messagingSenderId: "1025208314429",
  appId: "1:1025208314429:web:a9fe6d03700815c0a75854",
  measurementId: "G-RDXR3QM5M1"
}
firebase.initializeApp(config)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

// export const myFirebase = firebase
// export const myFirestore = firebase.firestore()
// export const myStorage = firebase.storage()
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;