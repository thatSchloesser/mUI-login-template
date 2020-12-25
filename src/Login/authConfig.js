import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';

const uiConfig = {
  callbacks: {
    // This method runs upon a successful login
    signInSuccessWithAuthResult: function (authResult) {
      let idToken = null;
      let userInfo = authResult.additionalUserInfo;
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then((id) => {
          console.log('setting cookie');

          idToken = id;
          // return axios.post('/cookie', { idToken });
          return 0;
        })
        .then((cookie) => {
          const newUser = userInfo.isNewUser;
          if (newUser) {
            console.log('new user!');
            const body = {
              idToken: idToken,
              profile: userInfo.profile,
            };
            // return axios.post('/user', body);
            return 0;
          } else {
            console.log('not new user');
          }
        })
        .then(() => {
          // location.href = '/routes/redirect';
          console.log('routed');
        })
        .catch(function (error) {
          console.log('LOGIN FLOW ERROR', error);
        });
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle. (developer handles on false)
      return false;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  // signInSuccessUrl: '/routes/redirect',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

export default uiConfig;
