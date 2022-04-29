import React from 'react';
import {useHistory} from 'react-router-dom';

let BackButton = props => {
  let history = useHistory ();
  return (
    <React.Fragment>
      <div className="row" style={{"marginTop":"50px"}}>
        <button className="btn btn-primary" onClick={() => history.goBack ()}>
          {props.btnText ? props.btnText : 'Back'}
        </button>

      </div>
      <div className="clearfix" />
    </React.Fragment>
  );
};
export default BackButton;
