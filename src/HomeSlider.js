import React, { Component } from 'react';
import { Link} from 'react-router-dom';
class HomeSlider extends Component {
    render() {
        return (
     <React.Fragment>
            <div id="main-slider"> 
              <div id="home-slider" className="owl-carousel owl-theme">
                  <div className="item">
                      <img src="images/slider-1.jpg" alt="slide-1" className="img-responsive" />
                      <div className="slider-desc">
                          <div className="container">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="slide-offers-left">
                                          <div className="slide-offers-title"><span>Men’s</span><br/>FASHION</div>
                                          <p>New & Fvhresh collection<br/>arraival in believe store</p>
                                          <Link to="/products/category/men's clothing" className="btn btn-blue">Shop Now</Link>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                       <div className="slide-offers-right">
                                          <div className="slide-offers-title"><span>Women’s</span><br/>FASHION</div>
                                          <p>New & Fvhresh collection<br/>arraival in believe store</p>
                                          <Link to="/products/category/women's clothing" className="btn btn-blue">Shop Now</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="item">
                      <img src="images/slider-2.jpg" alt="slide-2" className="img-responsive" />
                      <div className="slider-desc">
                          <div className="container">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="slide-offers-left">
                                          <div className="slide-offers-title"><span>50% Price cut</span><br/>for online order</div>
                                          <p>New & Fvhresh collection<br/>arraival in believe store</p>
                                          <Link to="/products" className="btn btn-blue">Shop now</Link>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                       
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

export default HomeSlider;