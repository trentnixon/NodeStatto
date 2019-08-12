import React, { Component } from 'react';
import {connect } from 'react-redux';

// Actions
import {fetchSheets} from "../../../../actions/Login";

// Stateless Component
import LoginHeader from "./stateless/Login_Header";


// Logic Components
import LoginForm from "./logic/Login_InputField";
import TeamSheet from "./logic/OLD_Login_PlayerRoster";

//const THISLOGIN = new fetchSheets(), SetLang="EN";

class Login extends Component {
  componentWillMount() {  
      THISLOGIN.fetch(window.gapi.load); 
  }  
  render() {
    //console.log(this.props.LOGIN.SELECTEDTEAMID, this.props.match.params)
    return (
     <div id="Login">
         Prepare
     </div>  
    )
  }
}  
 
const mapStateToProps = (state) => ({ 
  LOGIN: state.LOGIN,
  LABELS:state.LABELS.lANG[SetLang]
})
export default connect(mapStateToProps)(Login); 