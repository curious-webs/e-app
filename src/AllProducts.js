import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router,Link } from 'react-router-dom'
import BackButton from './BackButton';

let AllProducts = () => {
  const [products, setData] = useState ([]);
  const fetchApi = () => {
    axios
      .get ('https://fakestoreapi.com/products')
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
     <div className="newest">
        <div className="container">
          <BackButton/>
          <div className="newest-content">
            <div className="newest-tab">
             
<h1>All Products</h1>
<br/>
              <div id="myTabContent" className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade in active"
                  id="1"
                  aria-labelledby="cat-1"
                >
                  <div className="row clearfix" />
                  {products.map ((product, i) => {
                    return (
                      <React.Fragment>
                        <div className="col-md-3 prdct-grid" key={product.id}>
                          <div className="product-fade" key={product.id}>
                            <div className="product-fade-wrap" key={product.id}>

                              <div
                               id="product-images"
                                className=""
                              >
                                <div className="item">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="img-responsive"
                                  />
                                </div>  
                               
                               
                              </div>
                              <div className="product-fade-ct">
                                <div className="product-fade-control">
                                
                                
                                 
                                  
                                </div>

                              </div>
                            </div>
                          </div>

                          <div className="
                          product-name">
                            {/*  */}
                         <Link to={`/product/${product.id}`}> {product.title}</Link>
                            {/* <Link to='/product/:{d.id}'>
                              {product.title}
                              </Link> */}
                           
                          </div>
                          <div className="star-1" title="regular">
                            <img
                              alt="1"
                              src="images/star-on.png"
                              title="regular"
                            />&nbsp;
                            <img
                              alt="2"
                              src="images/star-on.png"
                              title="regular"
                            />&nbsp;
                            <img
                              alt="3"
                              src="images/star-on.png"
                              title="regular"
                            />&nbsp;
                            <img
                              alt="4"
                              src="images/star-off.png"
                              title="regular"
                            />&nbsp;
                            <img
                              alt="5"
                              src="images/star-off.png"
                              title="regular"
                            />
                            <input
                              name="score"
                              type="hidden"
                              value="3"
                              readonly=""
                            />
                          </div>
                          <div className="product-price">
                            <span>$19.00</span> ${product.price}
                          </div>
                          <div className='clearfix text-center'>
                          <a href="" className="btn btn-to-cart">
                                    <span className="bag" />
                                    <span>Add To cart</span>
                                    <div className="clearfix" />
                                  </a>
                          </div>
                        </div>
               {i>0 && i%4 == 0 && <div className="cleafix"></div>}       
                        
                      </React.Fragment>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllProducts;
