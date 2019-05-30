import React, { Component } from 'react';
import {connect } from 'react-redux';
import LoginForm from "./Login_InputField";
import LoginHeader from "./Login_Header";
import TeamSheet from "./Login_PlayerRoster";
import {fetchSheets} from "../../../../actions/Login";

const THISLOGIN = new fetchSheets(), SetLang="EN";

class Login extends Component {
  componentWillMount() {  
      THISLOGIN.fetch(window.gapi.load);
  }  
  render() {
    //console.log(this.props)
    return (
     <div id="Login">
          <LoginHeader {... this.props}/>
        
          <div className="LoginFormContainer">
            <div className="LoginInner">
              <div id="FormInput">
                  <LoginForm {... this.props}/>
                </div>
                <div id="Results">
                  <TeamSheet {... this.props}/> 
                </div>
            </div>
          </div>
     </div>
    )
  }
}  
 
const mapStateToProps = (state) => ({ 
  LOGIN: state.LOGIN,
  LABELS:state.LABELS.lANG[SetLang]
})
export default connect(mapStateToProps)(Login); 