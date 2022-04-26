import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router, Link} from 'react-router-dom';
import {format} from 'date-fns';

import {useParams} from 'react-router-dom';
import BackButton from '../BackButton';
  
let BlogDetail = () => {
  const [post, setData] = useState ([]);
  const headers = {
    'app-id': '6264fc17718eab04a1f96f35',
  };
  let {id} = useParams ();
  const url = `https://dummyapi.io/data/v1/post/${id}`;
  const fetchApi = async () => {
    await axios
      .get (url, {
        headers: headers,
      })
      .then (response => {
        console.log ('blogsssss');
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
      <div className="rec-blog">
        <div className="container">
          <BackButton/>
          <div className="rec-blog-inner">
            <div className="blog-title">
              <h1>{post.text}</h1>
            </div>

            <img style={{"width":"100%","height": "auto"}} src={post.image} alt={post.publishDate} />
            <h6 style={{"display":"flex","justify-content": "space-between"}}>
           {post.owner &&  <span><strong>Author : </strong>{post.owner.firstName}</span>  }  
           <span><strong>Likes : </strong>{post.likes} </span>   
             <span>
             <strong>Date : </strong>{format (new Date (), 'd-MM-yyyy').toString ()}
               </span> 
              </h6>
            <p>{post.text}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogDetail;
