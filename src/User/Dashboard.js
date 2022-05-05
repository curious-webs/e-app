import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import {editProfile} from '../Actions/userAction';
import Signin from './Signin';   

let Dashboard = props => {
  let [state, setState] = useState ({email: props.users.data.email,  error: ''});


//   const email=useSelector(state=>state.users.data.email);

// console.log("Email using useSelector " + email);

  // const users=useSelector(state=>state.users);
  // console.log("State inside dashboard");
  // console.log(users);
  //let [state, setState] = useState ({isLoggedIn: false});

  let handleClick = (e) => {
    
  }   
  const dispatch = useDispatch ();
  let handleSubmit = (e) => {
    dispatch(editProfile(state));
  }
  let handleChange = (e) => {
    setState({...state,'email':e.target.value}); 
  }
  console.log ('inside dashboard');
  let isLoggedIn = false;
  console.log (props);
  if (props.users.status == '200') {
    isLoggedIn = true;
  }
console.log(localStorage.getItem('x-auth-token'))
  return (
    <React.Fragment>
  
      {isLoggedIn && <section className="h-100 bg-dark" style={{marginTop: '40px'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="co-md-7">

              <div className="card card-registration my-4">
                <div className="row g-0">
                  {state.message && <p>{state.message}</p>}

                  <div className="form-outline mb-4">
                    <label>You are  successfully logged in with </label>
                    <input 
                      type="text"
                      id="form3Example97"
                      className="form-control form-control-lg"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />

                  </div>
                  

                  <div className="d-flex justify-content-end pt-3">

                    <button
                      type="button"
                      className="btn btn-warning btn-lg ms-2"
                     
                      onClick={handleSubmit}
                    >
                     Update Email
                    </button>

                  </div> 
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>}

      {!isLoggedIn && <Signin isLoggedIn={false} />}

    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    users: state.user.users,
  };
};
// const mapDispatchToProps = (dispatch) =>{
//   return {
//     editProfile:(params)=>dispatch(editProfile(params))
//   }
    
   
  
//  // return bindActionCreators({editProfile},dispatch);
// }


  


// export default Dashboard;

export default connect (mapStateToProps) (Dashboard);
