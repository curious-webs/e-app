import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class HomePageCategories extends Component {
    render() {
        return (
            <React.Fragment>
<div className="container">
                  <div className="home-content">
                      <div className="cat-offers">
                          <div className="row">
                              <div className="col-md-4">
                                  <div className="cat-sec-1">
                                      <img src="images/cat-1.jpg" className="img-responsive" alt=""/>
                                      <div className="cat-desc">
                                          <div className="cat-inner">
                                              <div className="cat-title">man<span>Clothing</span></div>
                                              <Link to="/products/category/men's clothing" className="btn btn-border">Buy Now</Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="cat-sec-2">
                                      <img src="images/cat-2.jpg" className="img-responsive" alt=""/>
                                       <div className="cat-desc">
                                           <div className="cat-inner">
                                              <div className="cat-title">woman<span>Clothing</span></div>
                                              <Link to="/products/category/women's clothing" className="btn btn-border">Buy Now</Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="cat-sec-3">
                                      <img src="images/cat-3.jpg" className="img-responsive" alt=""/>
                                       <div className="cat-desc">
                                           <div className="cat-inner">
                                              <div className="cat-title">accessories<span>collections - 2014</span></div>
                                              <Link to="/products/category/electronics" className="btn btn-border">shop Now</Link>
                                           </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </React.Fragment>
           
        );
    }
}

export default HomePageCategories;