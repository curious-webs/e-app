import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router, Link} from 'react-router-dom';
import styles from './productdetails.module.css';
import BackButton from './BackButton';

let ProductDetails = () => {
  // const{id}=useParams();
  const [product, setData] = useState ([]);
  let {id} = useParams ();
  const url = `https://fakestoreapi.com/products/${id}`;
  //   console.log("sjkfhkdglek");
  const fetchApi = () => {
    axios
      .get (url)
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
      <div className="container">
        <BackButton />
        <div className={styles.card}>
          <div className="container-fliud">

            <div className={styles.wrapper}>

              <div className="preview col-md-6">

                <div
                  className={[
                    styles['preview-pic'],
                    styles['tab-content'],
                  ].join (' ')}
                >
                  <div
                    className={[styles['tab-pane'], styles['active']].join (
                      ' '
                    )}
                    id="pic-1"
                  >
                    <img src={product.image} />
                  </div>
                </div>

              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.description}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.
                </p>
                <h4 className="price">
                  current price: <span>{product.price}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong>
                  {' '}
                  of buyers enjoyed this product!
                  {' '}
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="small">
                    s
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    m
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    l
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    xl
                  </span>
                </h5>
                <h5 className="colors">
                  colors:
                  <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  />
                  <span className="color green" />
                  <span className="color blue" />
                </h5>
                <div className="action">
                  <button
                    className={[
                      styles['btn-default'],
                      styles.btn,
                      styles['add-to-cart'],
                    ].join (' ')}
                    type="button"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default ProductDetails;
