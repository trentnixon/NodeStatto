import React, { Component } from 'react'

import LoadingScreen from "./Loading"
import Main from "./Main";
import {connect } from 'react-redux';
import { FetchData } from "../../actions/Load"

const Content = new FetchData();

  class App extends Component { 

    componentWillMount() {

      // Set User ID
      Content.id=this.props.match.params.playerid;
  
      Content.start(); 
    } 

    shouldComponentUpdate(){return true;}
    
    componentDidUpdate(nextProps, nextState){
      if(this.props.LOAD.IDERROR === true){
        this.props.history.push("/error/IDError")
      }
    }
    render () { 
        if(this.props.LOAD.UI_READY === true){
          return (  <Main {... this.props}/> );
        }else{
          return(   <LoadingScreen {... this.props}/> )
        }
    }
  }

const mapStateToProps = (state) => ({ 
  LOAD: state.LOAD,
  DATA: state.DATA
})
export default connect(mapStateToProps)(App);