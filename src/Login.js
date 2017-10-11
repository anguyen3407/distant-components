import React, { Component } from 'react';
import {connect} from 'react-redux';
import { loginAs } from './redux-stuff/reducer'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: ''
    };

    this.updateLoginName = this.updateLoginName.bind(this);
  }

  updateLoginName(name) {
    this.setState({ loginName: name })
  }

  render() {
    const { loggedInAs, isCreditCardHolder, loginAs } = this.props;
//loginAs from line 20 is different than loginAs from line 3
    return (
      <div className="login">
        {!loggedInAs && <div>
          Log in as <input onChange={(e) => this.updateLoginName(e.target.value)} /> <button className="button"
          onClick={(e) => loginAs(e.target.value)}>Go</button>
        </div>}
        {loggedInAs && <div>
          Welcome, {loggedInAs}! {isCreditCardHolder && "(CC holder)"}
        </div>}
      </div>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    loggedInAs: state.loggedInAs,
    isCreditCardHolder: state.isCreditCardHolder
  }
};

const mapDispatchToProps = {
  loginAs
}


export default  connect(mapStateToProps, mapDispatchToProps)(Login);