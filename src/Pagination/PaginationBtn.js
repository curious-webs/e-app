import React from 'react';
let PaginationBtn = props => {
  let pageNumber = props.pageNumber;

  return (
    <React.Fragment>
      <button onClick={props.onClick} className="btn btn-primary">
        {props.pageNumber}
      </button>
    </React.Fragment>
  );  
};

export default PaginationBtn;
