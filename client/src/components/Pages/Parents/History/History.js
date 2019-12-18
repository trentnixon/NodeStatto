import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {Route,Switch } from "react-router-dom";
// Template
import Container from "../../../Template/Page/Container";

// Routes
import ListHistory from "./HistoryList";
import HistoryDeepDive from "./HistoryDeepDive";

// Class
export default  class History extends Component {
  componentWillMount() {}
  shouldComponentUpdate(){ return true;}
  componentWillUpdate(){ return true;}
  componentDidUpdate(nextprops,nextState){}
  render() {
  
    console.log(this.props)
  
    return (  
      <Container> 
          <Switch>
              <Route  exact path={`/history`} render={()=> <ListHistory  SITE={this.props.LABELS.SITE}  OrderBy='TeamID'{... this.props}/> }  /> 
              <Route  path={`/history/for/:teamID`} render={()=>  
                    <HistoryDeepDive 
                        SITE={this.props.LABELS.SITE} 
                        OrderBy='TeamID'
                        HEADING={this.props.LABELS.SITE.TITLES.HISTORY+' '+ this.props.LABELS.SITE.SUBS.FOR} 
                        DATA={this.props.PLAYER_DATA.Primary.FOR} 
                        {... this.props}/> } 
              /> 
              <Route  path={`/history/against/:teamID`} render={()=> 
                   <HistoryDeepDive 
                        SITE={this.props.LABELS.SITE} 
                        OrderBy='OppositionID'
                        HEADING={this.props.LABELS.SITE.TITLES.HISTORY+' '+ this.props.LABELS.SITE.SUBS.AGAINST} 
                        DATA={this.props.PLAYER_DATA.Primary.AGAINST} 
                        {... this.props} /> } 
                />
          </Switch>
      </Container>
    )
  }
}

/* *

<Router basename={'/'+this.props.DATA_SETUP.SelectTeamID+'/'+this.props.DATA_SETUP.SelectedPlayerID }>
          <div>
              <Route  path={`/history`} render={()=> 
                  <ListHistory 
                      SITE={this.props.LABELS.SITE} 
                      OrderBy='TeamID'
                      {... this.props}/> }   
              />   

              <Route  path={`/history/for/:teamID`} render={()=>  
                    <HistoryDeepDive 
                        SITE={this.props.LABELS.SITE} 
                        OrderBy='TeamID'
                        HEADING={this.props.LABELS.SITE.TITLES.HISTORY+' '+ this.props.LABELS.SITE.SUBS.FOR} 
                        DATA={this.props.PLAYER_DATA.Primary.FOR} 
                        {... this.props}/> } 
              /> 
              <Route  path={`/history/against/:teamID`}render={()=> 
                   <HistoryDeepDive 
                        SITE={this.props.LABELS.SITE} 
                        OrderBy='OppositionID'
                        HEADING={this.props.LABELS.SITE.TITLES.HISTORY+' '+ this.props.LABELS.SITE.SUBS.AGAINST} 
                        DATA={this.props.PLAYER_DATA.Primary.AGAINST} 
                        {... this.props} /> } 
                />
          </div>
        </Router> 
*/
