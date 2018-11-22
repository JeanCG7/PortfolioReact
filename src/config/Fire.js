import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCEnv5nrydFvOppO-k9gPQiUS51zvt_N4M",
    authDomain: "portfolio-82b37.firebaseapp.com",
    databaseURL: "https://portfolio-82b37.firebaseio.com",
    projectId: "portfolio-82b37",
    storageBucket: "portfolio-82b37.appspot.com",
    messagingSenderId: "301486334996"
}

const fire = firebase.initializeApp(config);
const storage = firebase.storage();
export {
    fire as default,
    storage
}