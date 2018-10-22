import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Stage from "./components/Pages/Stage";
import Wrong_ID from "./components/Pages/Errors/ID_Missing";
import './App.css'

export default class App extends Component {
    render () { 
      return ( 
        <Router>
            <div id="statto-app">	
              <Route exact path="/" component={Login}/>
              <Route exact path="/:playerid" component={Stage} /> 
              <Route exact path="/error/IDError" component={Wrong_ID} />  
            </div>
        </Router> 
     );
    }
  }