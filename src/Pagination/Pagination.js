import React from 'react';
import PaginationBtn from './../Pagination/PaginationBtn';
let Pagination = props => {
  let currentPage = props.currentPage;
  let totalPage = props.totalPage;
  let startPage = currentPage < 5 ? 1 : currentPage - 4;
  let endPage = 8 + startPage;
  let rows = [];
  endPage = totalPage < endPage ? totalPage : endPage;
  let diff = startPage - endPage + 8;
  startPage -= startPage - diff > 0 ? diff : 0;

  if (startPage > 1) {
    rows.push (
      <PaginationBtn  onClick={() => props.onClick (1)} pageNumber={1} key={1} />
    );
  }
  for (var i = startPage; i < endPage; i++) {
    let num = i;
    if (currentPage == 8) {
      console.log ('inside star');
      if (!rows.includes ('.....')) {
        rows.push ('.....');
      }
    }
    rows.push (
      <PaginationBtn 
        onClick={() => props.onClick (num)}
        pageNumber={num}
        key={num}
      />
    );
  }

  if (endPage < totalPage) {
    rows.push ('........');
    rows.push (
      <PaginationBtn
        onClick={() => props.onClick (totalPage)}
        pageNumber={totalPage}
        key={totalPage} 
      />
    );
  }
  return (
    <React.Fragment>
      {totalPage > 0 &&
        rows.map ((item, i) => {
          return (
            <React.Fragment>
              {item}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};
export default Pagination;
