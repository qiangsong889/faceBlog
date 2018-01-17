import firebase from 'firebase';
import keys from '../../../config'


const config = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId
};

firebase.initializeApp(config);

let auth = firebase.auth();

const base = {
  googleLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
//   facebookLogin: (event) => {
//     event.preventDefault();
//     let provider = new firebase.auth.FacebookAuthProvider();
//     auth.signInWithPopup(provider)
//       .then((response) => {
//         console.log('This is the response: ', response);
//       })
//       .catch((err) => {
//         console.log('This is the error: ', err);
//       });
//   },
  githubLogin: (event) => {
    event.preventDefault();
    let provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider)
      .then((response) => {
        console.log('This is the response: ', response);
      })
      .catch((err) => {
        console.log('This is the error: ', err);
      });
  },
  logout: () => {
    auth.signOut();
  },
  auth: auth,
}


export default base;