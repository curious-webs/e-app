import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router, Link} from 'react-router-dom';

let Nav = () => {
  const [categories, setData] = useState ([]);
  const fetchApi = async () => {
    await axios
      .get ('https://fakestoreapi.com/products/categories')
      .then (response => {
        console.log (response.data);
        setData (response.data);
      })
      .catch (error => {
        console.log ('Error : ', error);
      });
  };
  useEffect (() => {
    fetchApi ();
  }, []);
  return (
    <React.Fragment>
      <div id="header">
        <div className="top">
          <div className="container">
            <ul className="top-support">
              <li>
                <i className="fa fa-phone-square" />
                <span>(+800) 123 456 7890</span>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-envelope-square" />
                  <span>info@bootstrapmart.com</span>
                </a>
              </li>
            </ul>

            <div className="top-control">

              <Link to="/register">Register</Link>
              {/* <a href=""></a> */}
              <span>•</span>
              <a href="">Login</a>
            </div>
            <div className="clearfix" />
            <div className="top-offers show-mobile">
              <div
                className="alert alert-warning alert-dismissible fade in offers"
                role="alert"
              >
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times-circle" />
                  </span>
                </button>
                Free Shipping <a href="">on All Orders Over</a> $75!
              </div>
            </div>
          </div>
        </div>

        <div id="believe-nav">
          <div className="container">
            <div className="min-marg">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <Link className="navbar-brand" to="/">
                    <img src="images/logo.png" alt="" />
                  </Link>
                </div>

                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <Link to="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/products">Shop</Link>
                    </li>
                    <li>
                      <Link to="/products/categories">Categories</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>

                  </ul>

                  <ul className="nav navbar-nav navbar-right">
                    <li className="menu-search-form">
                      <a href="#" id="open-srch-form">
                        <img src="images/srch.png" alt="srch" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/pav.png" alt="pav" /><span>2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/bag.png" alt="bag" /><span>2</span>
                      </a>
                    </li>
                    <li id="open-srch-form-mod">
                      <div>
                        <form className="side-search">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control search-wid"
                              placeholder="Search Here"
                              aria-describedby="basic-addon1"
                            />
                            <a
                              href=""
                              className="input-group-addon btn-side-serach"
                              id="basic-addon1"
                            >
                              <i className="fa fa-search" />
                            </a>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>

                </div>

              </nav>
            </div>
            <div className="srch-form">
              <form className="side-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control search-wid"
                    placeholder="Search Here"
                    aria-describedby="basic-addon2"
                  />
                  <a
                    href=""
                    className="input-group-addon btn-side-serach"
                    id="basic-addon2"
                  >
                    <i className="fa fa-search" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="cat-nav">
          <div className="container">
            <nav className="navbar navbar-default">

              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#cat-nav-mega"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>

              <div className="collapse navbar-collapse" id="cat-nav-mega">
                <ul className="nav navbar-nav">
                 
                  {categories.map ((cat, i) => {
                    return (
                      <React.Fragment>

                        <li key={cat} className="menu-item"> 
                         <Link key={cat} to={`/products/category/${cat}`}>{cat} </Link></li>

                      </React.Fragment>
                    );
                  })}

                  <li className="cat-img-off">
                    <img src="images/offers.png" alt="off" />
                  </li>
                </ul>

              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
