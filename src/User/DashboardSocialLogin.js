import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
 
import {updateDisplayName} from '../Actions/userAction';

class DashboardSocialLogin extends Component { 
  constructor (props) {
    super (props);
  }
  state = {
    displayName: this.props.displayName,
  };

  render () {
    console.log ('props');
    //console.log (this.props);
    console.log (this.state);
    // console.log(this.props.NameInfo[0].displayName);
    let handleChange = e => {
      this.setState ({...this.state,[e.target.name] : e.target.value});
    }; 
    return (
      <React.Fragment>
        <h1>Test Data</h1>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          value={this.state.displayName}
        /> 
        <button className='btn btn-primary' onClick={()=>this.props.updateDisplayName(this.state.displayName)}>Update Name</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log ('states');
  console.log (state);
 
  //console.log(state.userInfo.NameInfo[0].displayName);
  return {
    displayName: state.userInfo.displayName,
  };
};
const mapDispatchToProps = dispatch => {
  /*
  return{
      increment:()=>dispatch(increment()),
      decrement:()=>dispatch(decrement()),
      incByVal:(n)=>dispatch(incByVal(n)),
      decByVal:(n)=>dispatch(decByVal(n)),
      updateAddress:(s)=>dispatch(updateAddress(s))
  };
  */
  return bindActionCreators ({updateDisplayName}, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps) (
  DashboardSocialLogin
);

//export default DashboardSocialLogin;
