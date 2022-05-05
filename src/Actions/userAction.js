import axios from 'axios';
import '../Firbase';
import {
  getAuth,
  signInWithPopup,
  getRedirectResult,
  GoogleAuthProvider,
} from 'firebase/auth';

const provider = new GoogleAuthProvider ();
provider.addScope ('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters ({
  login_hint: 'user@example.com',
});
export const getUsers = params => {
  console.log ('props in getUser');
  console.log (params);
  return (dispatch, getState) => {
    axios
      .post (process.env.REACT_APP_USER_API_URL + '/users/signin', {
        email: params.email,
        password: params.password,
      })
      .then (response => {
        console.log ('Response is ');
        console.log (response.data);
        console.log ('headers are');
        console.log (response.headers);
        localStorage.setItem ('x-auth-token', response.headers['x-auth-token']);
        dispatch ({type: 'USER_LOGGEDIN', payload: response.data});
      })
      .catch (error => {
        console.log (error);
      });
  };
};

export const editProfile = params => {
  console.log ('props in editProfile');

  const headers = {
    'x-auth-token': localStorage.getItem ('x-auth-token'),
  };

  console.log (process.env.REACT_APP_USER_API_URL + '/users/editProfile');
  return async (dispatch, getState) => {
    await axios
      .post (
        process.env.REACT_APP_USER_API_URL + '/users/editProfile',
        {
          email: params.email,
          token: localStorage.getItem ('x-auth-token'),
        },
        {headers: headers}
      )
      .then (response => {
        console.log ('Response is ');
        console.log (response.data);
        console.log ('headers are');
        console.log (response.headers);
        //localStorage.setItem('x-auth-token', response.headers['x-auth-token']);
        dispatch ({type: 'USER_LOGGEDIN', payload: response.data});
      })
      .catch (error => {
        console.log (error);
      });
  };
};

export const loginWithSocial = params => {
  return async (dispatch, getState) => {
    const auth = getAuth ();
   await signInWithPopup (auth, provider) //provider
      .then (result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult (result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user"); console.log(user); 
        dispatch ({type: 'USER_LOGGEDIN', payload: user});
        // ...
      })
      .catch (error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError (error);
        // ...
      });
  };
};


export const updateDisplayName = (params) => {
  console.log("Display Name"); 
  console.log(params); 
  console.log(params); 
  return {type: 'UPDATE_ADDRESS', payload: params}; 
}  

// export const  userActions = {
//     getUsers : getUsers,
//     editProfile : editProfile
// }
