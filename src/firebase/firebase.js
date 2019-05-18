import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
    this.db = app.firestore();
  }

  // AUTH API
  createUserWithEmailAndPasswordHandler = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPasswordHandler = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signOutHandler = () => this.auth.signOut();

  passwordResetHandler = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdateHandler = password => this.auth.currentUser.updatePassword(password);

  deleteUserHandler = () => this.auth.currentUser.delete();

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) => this.auth.onAuthStateChanged(authUser => {
    if (authUser) {
      this.user(authUser.uid)
        .get()
        .then(snapshot => {
          const dbUser = snapshot.data();

          // default empty roles
          // if (!dbUser.roles) {
          //   dbUser.roles = {};
          // }

          // merge auth and db user
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            ...dbUser,
          };

          next(authUser);
        });
    } else {
      fallback();
    }
  });
  // *** USER API ***

  userAuth = () => this.auth.currentUser.email;

  userUid = () => this.auth.currentUser.uid;

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');

  // COMMENTS API

  comment = id => this.db.doc(`comments/${id}`);

  comments = () => this.db.collection('comments');
}

export default Firebase;
