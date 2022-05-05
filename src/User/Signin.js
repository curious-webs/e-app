import React from 'react';
import {Router, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers, loginWithSocial} from './../Actions/userAction';
import Dashboard from './Dashboard';
import DashboardSocialLogin from './DashboardSocialLogin';

let Signin = () => {
  let [state, setState] = useState ({email: '', password: '', error: ''});
  let isLoggedIn = false;
  //const navigate = useNavigate()
  //const history = useHistory();
  const users = useSelector (state => state.user.users);
  console.log ('State inside signin');
  console.log (users);
  let handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    let name = e.target.name;
    setState ({...state, [name]: e.target.value});
  };
  const dispatch = useDispatch ();
  let handleSubmit = async e => {
    console.log ('state is');
    console.log (state);
    dispatch (getUsers (state));
  };

  console.log ('users');
  console.log (users);

  let providerId = '';
  if (users.status == '200' || users.length != 0) {
    isLoggedIn = true;
  }

  if (users.providerId) {
    providerId = 'true';
  } 

  return (
    <React.Fragment>
       {isLoggedIn && providerId && <DashboardSocialLogin />}
      {isLoggedIn && !providerId && <Dashboard />}
      {!isLoggedIn &&
        <section className="h-100 bg-dark" style={{marginTop: '40px'}}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="co-md-7">

                <div className="card card-registration my-4">
                  <div className="row g-0">
                    {state.message && <p>{state.message}</p>}
                    <div className="form-outline mb-4">
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
                    <div className="form-outline mb-4">
                      <br/>
                      <input
                        type="password"
                        id="form3Example99"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
<br/>
                      <button
                        type="button"
                        className="btn btn-warning btn-lg ms-2"
                        onClick={handleSubmit}
                      >
                        Submit form
                      </button> 
                      OR 
                      <button className="btn btn-warning btn-lg ms-2" onClick={() => dispatch (loginWithSocial ())}>
                        Login With Google
                      </button>
                    </div>
                    <Link to="dashboard">Dashboard</Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>}
    </React.Fragment>
  );
};

export default Signin;
