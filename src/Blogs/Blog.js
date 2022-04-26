import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Router, Link} from 'react-router-dom';
import {format} from 'date-fns';
import BackButton from '../BackButton';
import Pagination from '../Pagination/Pagination';
   
let Blog = () => {
  const [posts, setData] = useState ([]);
  const [totalPage, setTotalPage] = useState (0);
  const [page, setPage] = useState (1);
  const [currentPage, setCurrentPage] = useState (1);
  const [limit, setLimit] = useState (6);
  const [pageNum, setpageNum] = useState (1);

  const headers = {
    'app-id': '6264fc17718eab04a1f96f35',
  };
  let url = `https://dummyapi.io/data/v1/post?page=${page}&limit=${limit}`;
  console.log ('URL is ');
  console.log (url);
  const fetchApi = async (url) => {
    console.log("URL inside etchAPI");
    console.log (url);
    await axios
      .get (url, {
        headers: headers,
      })
      .then (response => {
        console.log ('blogsssss');
        console.log (response.data);
        setData (response.data.data);
        setTotalPage (response.data.total);
      })
      .catch (error => {
        console.log ('Error : ', error);
      });
  };
  useEffect (() => {
    // console.log("URL in useEffect");
    // console.log(url);
    fetchApi (url);
  }, [url]);

  const handleClick = React.useCallback ((num, e) => {
    // console.log (e);
    // console.log (num);
    // console.log("Page value is" + page);
   // page = num;
    //setPage (num); 
    setPage (num);    
    setCurrentPage(num);        
   // setLimit(5);
  // fetchApi ();
  }, [setPage,setCurrentPage]);
  var rows = [];
  //let currentPage = 1;
  console.log(currentPage);
 // let totalPage = total;
  // let startPage = currentPage < 5 ? 1 : currentPage - 4;
  // let endPage = 8 +startPage;
  // endPage = (totalPage < endPage) ? totalPage : endPage;
  // let diff = startPage- endPage + 8;
  // startPage -= (startPage-diff>0) ? diff : 0; 
  // if(startPage > 1){
  //   rows.push (
  //     <PaginationBtn
  //       onClick={e => handleClick (1, e)}
  //       pageNumber={1}
  //       key={1}
  //     />
  //   );
    
  // }
  // for (var i = startPage; i < endPage; i++) {
  //   let num = i;
  //   if(currentPage==8){
  //     console.log("inside star")
  //     if(!rows.includes(".....")){
  //     rows.push(".....");
  //     }
  //   }
  //   rows.push (
  //     <PaginationBtn
  //       onClick={e => handleClick (num, e)}
  //       pageNumber={num}
  //       key={num}
  //     />
  //   );
  // }

  // if(endPage < totalPage){
  //   rows.push("........");
  //   rows.push (
  //     <PaginationBtn
  //       onClick={e => handleClick (totalPage, e)}
  //       pageNumber={totalPage}
  //       key={totalPage}
  //     />
  //   );
  // }
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
          <Pagination onClick={handleClick} currentPage={currentPage} totalPage={totalPage}/>
          {/* {totalPage > 0 &&
            rows.map ((item, i) => {
              return (
                <React.Fragment>
                  {item}
                </React.Fragment>
              );
            })} */}
        </div>
      </div>
    </React.Fragment>
  );
};
 
export default Blog;
