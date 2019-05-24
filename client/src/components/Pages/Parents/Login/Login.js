import React, { Component } from 'react';
import {connect } from 'react-redux';
import LoginForm from "./Login_InputField";
import LoginHeader from "./Login_Header";
import TeamSheet from "../../../Elements/Lists/Login_Teamsheet";
import {fetchSheets} from "../../../../actions/Login";

const THISLOGIN = new fetchSheets();
class Login extends Component {
  componentWillMount() {  
      THISLOGIN.fetch(window.gapi.load);
  } 
  render() {
    return (
     <div id="Login">
          <LoginHeader />
        
          <div className="LoginFormContainer">
              <div id="FormInput">
                <LoginForm {... this.props}/>
              </div>
              <div id="Results">
                <TeamSheet {... this.props}/>
              </div>
            
          </div>
     </div>
    )
  }
}  
 
const mapStateToProps = (state) => ({ 
  LOGIN: state.LOGIN,
})
export default connect(mapStateToProps)(Login); 