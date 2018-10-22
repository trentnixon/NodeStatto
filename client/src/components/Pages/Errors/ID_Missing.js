import React, { Component } from 'react';
import store from "../../../store/index"

export default class Login extends Component {
  componentWillMount() {  
    store.dispatch({ type:"IDERROR", payload:false});
  } 
  render() {
    return (
     <div>
         <h2>ERROR</h2>
         <h3>Incorrect or invalid ID</h3>
         <p>Return to login</p>
     </div>
    )
  }
}