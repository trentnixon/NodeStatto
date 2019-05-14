import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Pages/Login";
import Stage from "./components/Pages/Stage";
import Wrong_ID from "./components/Pages/Errors/ID_Missing";
import './App.css'

// Deply Instructions 
// https://www.youtube.com/watch?v=71wSzpLyW9k&t=392s

/**
 * 1. heroku login
 * 
 * 2. Commit to git
 * 
      git add .
      git commit -am "make it better"
      git push heroku master
 */



export default class App extends Component {
    render () { 
     return ( 
        <Router>
            <div id="statto-app">
              <Route  path="/:playerid" component={Stage} /> 
              <Route exact path="/" component={Login}/>
              <Route exact path="/error/IDError" component={Wrong_ID} />  
            </div>
        </Router> 
      )
    }
  }