import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

let Signup = () => {
  let [state, setState] = useState ({email: '', password: '', error: ''});
  let handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    let name = e.target.name;
    setState ({...state, [name]: e.target.value});
  };
  let handleSubmit = async e => {
  
   await  axios
      .post (process.env.REACT_APP_USER_API_URL + '/users/signup', {
        email: state.email,
        password: state.password,
        apiKey: process.env.REACT_APP_USER_API_KEY,
      })
      .then (function (response) {
       
        setState ({...state, message: response.data.message});
      })
      .catch (function (error) {
       
        setState ({...state, message: error.response.data.message});
      });
  };

  return (
    <React.Fragment>
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

                    <button
                      type="button"
                      className="btn btn-warning btn-lg ms-2"
                      onClick={handleSubmit}
                    >
                      Submit form
                    </button>

                  </div>   
                
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  );
};

export default Signup;
