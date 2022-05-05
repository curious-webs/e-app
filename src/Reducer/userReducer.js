import {combineReducers} from 'redux';
const is = {users: []};

const reducer = (state = is, action) => {
  console.log ('Action');
  console.log (action.type);
  switch (action.type) {
    case 'USER_LOGGEDIN': {
      console.log ('inside reducer');
      console.log (action.payload);

      return {users: action.payload};
    }

    default:
      return state;
  }
};

let isa = {displayName : "panda"}; 

const userInfoReducer = (state = isa, action) => {
  console.log ('Action');
  console.log (action.type);
  switch (action.type) {
    case 'UPDATE_ADDRESS': {
      // console.log ('inside reducer');
      // console.log (action.payload);

      return {displayName: action.payload};
    }

    default:
      return state;
  }
};
const rootReducer=combineReducers({
    user:reducer,
    userInfo:userInfoReducer
});
export default rootReducer;