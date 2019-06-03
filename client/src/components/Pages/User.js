import React, { Component } from 'react'

import LoadingScreen from "./Loading"
import Main from "./Main";
import {connect } from 'react-redux';

import { FetchData } from "../../actions/Load"

const Content = new FetchData(); 

let SetLang="EN";
class App extends Component { 
 
    componentWillMount() {
      // Set User ID
      console.log(this.props.match.params.playerid);
      Content.id=this.props.match.params.playerid; 
      Content.start(); 
    } 

    shouldComponentUpdate(){return true;}
    
    componentDidUpdate(nextProps, nextState){
      if(this.props.LOAD.ERRORS.IDERROR === true){
        this.props.history.push("/error/IDError")
      }
    }
    render () { 
      //console.log(this.props.LOAD.UISTATE.STATTO, this.props.LOAD.UISTATE.UI_READY)
        if(this.props.LOAD.UISTATE.STATTO === true && 
           this.props.LOAD.UISTATE.UI_READY === true)
           {
          return (  
            <Main 
                TITLES={this.props.LABELS.SITE.TITLES}
                SUBS={this.props.LABELS.SITE.SUBS}
                CTA={this.props.LABELS.SITE.CTA}

              {... this.props} 
            /> );
        }else{
          return(   <LoadingScreen {... this.props}/> )
        }
    }
  }

const mapStateToProps = (state) => ({ 
    LOAD: state.LOAD,
    DATA: state.DATA,
    LABELS:state.LABELS.lANG[SetLang],
    UX:state.UX
})
export default connect(mapStateToProps)(App);