import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router, Link} from 'react-router-dom';
import {format, setDate} from 'date-fns';
import BackButton from '../BackButton';
import Pagination from '../Pagination/Pagination';

let Blog = () => {
  const [posts, setData] = useState ([]);
  const [tags, setTags] = useState ([]);
  const [totalPage, setTotalPage] = useState (0); // for total pages
  const [page, setPage] = useState (1); // page that is clicked
  const [currentPage, setCurrentPage] = useState (1); // for current page
  const [limit, setLimit] = useState (21);
  const [sort, setSort] = useState ('');
  let [searchedKeyword, setKeyword] = useState ('');

  const headers = {
    'app-id': '6264fc17718eab04a1f96f35',
  };
  let url = `https://dummyapi.io/data/v1/post?page=${page}&limit=${limit}`;

  console.log ('URL is ');
  console.log (url);
  const fetchApi = async url => {
    console.log ('URL inside etchAPI');
    console.log (url);
    await axios
      .get (url, {
        headers: headers,
      })
      .then (response => {
        console.log ('blogsssss');
        console.log (response.data);
        setData (response.data.data);
        let totalPage = Math.round (response.data.total / limit);
        setTotalPage (totalPage);
      })
      .catch (error => {
        console.log ('Error : ', error);
      });
  };

  useEffect (
    () => {
      // console.log("URL in useEffect");
      // console.log(url);
      fetchApi (url);
      // fetchTags (tagURL);
    },
    [url]
  );

  const handleClick = React.useCallback (
    (num, e) => {
      setPage (num);
      setCurrentPage (num);
    },
    [setPage, setCurrentPage]
  );

  let handleSort = e => {
    console.log ('inside handle sort');
if(sort == 'asc'){
  setSort ('desc');
}else{
  setSort ('asc');
}
   
  };

  let handleChange = e => {
    setKeyword (e.target.value);
  };
  let filteredData = posts.filter (item => {
    let str = item.text.toLowerCase ();
    if (searchedKeyword != '') {
      return str.includes (searchedKeyword.toLowerCase ());
    } else {
      return item;
    }
  });
  if (sort != '') {
    var byDate = posts.slice (0);
    console.log ('posts array');
    console.log (byDate);
    if(sort  == 'desc') {
      filteredData = byDate.sort (function (a, b) {
        return a.likes - b.likes;
      });
    }else{
      filteredData = byDate.sort (function (a, b) {
        return b.likes - a.likes;
      });
    }
    
    console.log("ater sorting");
    console.log(filteredData);
  }
 
  console.log ('filtered data length');
  console.log (filteredData.length);
  return (
    <React.Fragment>

      <div className="rec-blog">
        <div className="container">
          <BackButton />
          <div className="rec-blog-inner">
            <div className="blog-title">
              <h1>Blogs</h1>
            </div>

            <div className="row">
              <div style={{marginBottom: '20px'}} className="col-md-12">
                <input
                  type="text"
                  name="Search"
                  id="searchBlog"
                  onChange={handleChange}
                  placeholder="Search"
                  className="form-control"
                />
              </div>

            </div>
            <div className="row">
              <div className="col-md-12" style={{marginBottom: '20px'}}>
                <label>Sort By: </label>
                <button onClick={handleSort} className="btn btn-primary">
                 Likes
                </button>
              </div>
            </div>
            <div className="row">

              {filteredData.length > 0 &&
                filteredData.map ((post, i) => {
                  return (
                    <React.Fragment>
                      <div className="col-md-4 blog-ct" key={post.id}>
                        <div className="blog-inner" key={post.id}>
                          <Link key={post.id} to={`/blog/${post.id}`}>
                            <img
                              key={post.id}
                              src={post.image}
                              alt={post.text}
                              className="img-responsive"
                            />
                          </Link>
                          <div className="blog-ct-title" key={`qw${post.id}`}>
                            <Link key={`ln${post.id}`} to={`/blog/${post.id}`}>
                              {post.text}
                            </Link>
                            <span key={`mj${post.id}`}>
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
              {filteredData.length == 0 && <p>No Data to display</p>}

            </div>
          </div>
          <Pagination
            onClick={handleClick}
            currentPage={currentPage}
            totalPage={totalPage}
          />

        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
