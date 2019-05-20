import React, { Component } from 'react';
import {connect } from 'react-redux';
import FromIDFeild from "../Elements/FormElements/LoginID";
import AutoComplete from "../Elements/FormElements/Login_AutoComplete";
import Title from "../Elements/type/PageTitle";
import SubTitle from "../Elements/type/PageSubTitle";
import TeamSheet from "../Elements/Lists/Login_Teamsheet";
import {fetchSheets} from "../../actions/Login";

const THISLOGIN = new fetchSheets();
//   <FromIDFeild />
class Login extends Component {
  componentWillMount() {  
  //  THISLOGIN.initClient()
    
    // This will need to be moved around.... 
      THISLOGIN.fetch(window.gapi.load);
  } 
  render() {
    return (
     <div id="Login">
          <div className="LoginFormContainer">
            <Title
              Title="Statto"
            />
            <SubTitle
              Title="Reviewing your LMS Career"
            />
           
            <AutoComplete {... this.props}/>
            <TeamSheet {... this.props}/>
          
          </div>
     </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  LOGIN: state.LOGIN,
})
export default connect(mapStateToProps)(Login);