import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Frame from "../Template/Frame";
import {PageView, BasicTracking} from "../../actions/UI/ga";
import {SetPageTitle} from "../../actions/UI/UI";

// Fetched Arrays
import {Navigation} from "../Template/Utilities/ObjectArray/NavigationArray"; 

// Base Route Setup
import MainRoute from "../Template/Navigation/Routes/Route_Mainjs"
// Components
import ScrollToTop from "../../ScrollToTop";
import ActiveFilter from "../Venders/MaterialUI/Filter/FilterActive"
 
export default class Statto extends Component {
  componentWillMount() {}  
  render() {
    SetPageTitle();
    PageView(window.location.pathname + window.location.search)
    BasicTracking(this.props.DATA_SETUP.SelectTeamID,this.props.PLAYER_DATA.Primary.Meta.Name, window.location.pathname)
    return (
      <Router  basename={'/'+this.props.DATA_SETUP.SelectTeamID+'/'+this.props.DATA_SETUP.SelectedPlayerID }>
          <Frame {... this.props} Navigation={Navigation} >
            <div id="display-statto-app">
                <ScrollToTop /> 
                <ActiveFilter {... this.props} />
                <MainRoute {... this.props}/>
            </div>
          </Frame> 
      </Router>  
    )  
  }
}