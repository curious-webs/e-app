import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './Nav';
import ProductDetails from './ProductDetails';
import React from 'react';
import Signup from './User/Signup';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Blogs/Blog';
import BlogDetail from './Blogs/BlogDetail';
import AllProducts from './AllProducts';
import AllCategories from './AllCategories';
import Category from './Category';
import Signin from './User/Signin';
import Dashboard from './User/Dashboard';

function App () {
  return (
    <React.Fragment>
      <Router>
        <Link to="/" />
        <Nav />
        {/* <div id="wrapper" className="homepage-1">

          <Nav />
          <Home />
        </div> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/blogs">
            <Blog /> 
          </Route>
          <Route path="/blog/:id">
            <BlogDetail/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/products/categories">
            <AllCategories/>
          </Route>
          <Route path="/products/category/:category">
            <Category/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <AllProducts/>
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
         
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
