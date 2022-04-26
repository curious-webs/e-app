import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router,Link } from 'react-router-dom'
import BackButton from './BackButton';

let AllCategories = () => {
  const [categories, setData] = useState ([]);
  const  fetchApi = async () => {
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
     <div className="newest catBlocks">
        <div className="container">
          <BackButton/>
          <div className="newest-content">
            <div className="newest-tab">
             <h1>All Categories</h1>
<br/>
              <div id="myTabContent" className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade in active"
                  id="1"
                  aria-labelledby="cat-1"
                >
                  <div className="row clearfix" />
                  {categories.map ((category, i) => {
                    return (
                      <React.Fragment>
                        <div className="col-md-3 prdct-grid" key={category}>
                          <div className="category-fade" key={category}>
                            <div className="category-fade-wrap" key={category}>

                              <div
                               id={`category-images${category}`}
                                className="category-images"
                              > 
                                <div className="item">
                                <Link to={`/products/category/${category}`}> {category}</Link>
                                </div>  
                               
                               
                              </div>
                              <div className="category-fade-ct">
                                <div className="category-fade-control">
                                  
                                  
                                
                                </div>

                              </div>
                            </div>
                          </div>

                          <div className="
                          category-name">
                            {/*  */}
                         
                            {/* <Link to='/category/:{d.id}'>
                              {category.title}
                              </Link> */}
                           
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

export default AllCategories;
