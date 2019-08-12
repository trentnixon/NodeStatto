import React,  { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Branch from "./components/Pages/Parents/Branches/Branch_Setup";

// Errors
import Wrong_ID from "./components/Pages/Errors/ID_Missing";

// CSS
import './App.css'
 
// Deploy Instructions 
// https://www.youtube.com/watch?v=71wSzpLyW9k&t=392s
/**
 * 1. heroku login
 * 2. Add .
 * 3. Commit to git
 * 4. Push to heroku
 * -- Command list 
      git add .
      git commit -am "make it better"
      git push heroku master 
 */

export default class App extends Component {
    render () {
     return (  
        <Router> 
            <div id="statto-app">
                <Route  path="/" component={Branch}/>
                <Route exact path="/error/IDError" component={Wrong_ID} />  
            </div>
        </Router>  
      ) 
    } 
  }