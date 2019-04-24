import app from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // AUTH
  createUserWithEmailAndPasswordHandler = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPasswordHandler = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOutHandler = () => this.auth.signOut();

  passwordResetHandler = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdateHandler = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
