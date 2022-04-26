import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePageBanner extends Component {
    
    render() {
        return (
            <React.Fragment>
<div className="content-offers">
                  <div className="container">
                      <div className="ct-offers">
                          <div className="ct-offers-title">Tommy Hilfiger<br/>Women's</div>
                          <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour</p>
                        
                          <Link className="btn btn-blue" to="/products">Discover more Product</Link>
                      </div>
                  </div>
              </div>
            </React.Fragment>
        );
    }
}

export default HomePageBanner;