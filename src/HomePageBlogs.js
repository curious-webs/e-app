import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router, Link} from 'react-router-dom';
import {format} from 'date-fns';

let HomePageBlogs = () => {
  const [posts, setData] = useState ([]);
  const headers = {
    'app-id': '6264fc17718eab04a1f96f35',
  };
  const fetchApi = async () => {
    await axios
      .get ('https://dummyapi.io/data/v1/post?page=1&limit=6', {
        headers: headers,
      })
      .then (response => {
        console.log ('blogsssss');
        console.log (response.data.data);
        setData (response.data.data);
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
          <div className="rec-blog-inner">
            <div className="blog-title">
              <span>The Blog</span>
            </div>
            <div className="row">
              {console.log (posts)}
              {posts.map ((post, i) => {
                return (
                  <React.Fragment>
                    <div className="col-md-4 blog-ct" key={post.id}>
                      <div className="blog-inner">
                        <Link to={`/blog/${post.id}`}>
                          <img
                            src={post.image}
                            alt={post.text}
                            className="img-responsive"
                          />
                        </Link>
                        <div className="blog-ct-title">
                          <Link to={`/blog/${post.id}`}>{post.text}</Link>
                          <span>
                            {format (
                              new Date (post.publishDate),
                              'd-MM-yyyy'
                            ).toString ()}

                          </span>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageBlogs;
