import React, { Component } from 'react';
import FromIDFeild from "../Elements/FormElements/LoginID";
import Title from "../Elements/type/PageTitle";
import SubTitle from "../Elements/type/PageSubTitle";
export default class Login extends Component {
  componentWillMount() {  } 
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
            <FromIDFeild />
          </div>
     </div>
    )
  }
} 