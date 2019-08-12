import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Template
import Container from "../../../Template/Page/Container";


// Routes
import ListHistory from "./HistoryList";
import HistoryDeepDive from "./HistoryDeepDive";

// Class
export default  class History extends Component {
  
  shouldComponentUpdate(){ return true;}
  componentWillUpdate(){ return true;}
  componentWillMount() {}
  componentDidUpdate(nextprops,nextState){
    //console.log(nextprops,nextState);
}
  render() {
  

    return (  
      <Container> 
        <Router basename={'/'+this.props.DATA_SETUP.SelectTeamID+'/'+this.props.DATA_SETUP.SelectedPlayerID }>
          <div>
              <Route exact path={`/history`} render={()=> 
                  <ListHistory 
                      SITE={this.props.LABELS.SITE} 
                      OrderBy='TeamID'
                      {... this.props}/> } 
              />

              <Route  path={`/history/for/:teamID`} render={()=>  
                    <HistoryDeepDive  
                        TITLE={this.props.LABELS.SITE.TITLES.HISTORY+' '+ this.props.LABELS.SITE.SUBS.FOR} 
                        DATA={this.props.PLAYER_DATA.Primary.FOR} 
                        OrderBy='TeamID'
                        {... this.props}/> } 
              /> 
              <Route  path={`/history/against/:teamID`}render={()=> 
                  <HistoryDeepDive 
                        TITLE={this.props.LABELS.SITE.TITLES.HISTORY+' '+ this.props.LABELS.SITE.SUBS.AGAINST} 
                        DATA={this.props.PLAYER_DATA.Primary.AGAINST} 
                        OrderBy='OppositionID'
                        {... this.props} /> } 
                />
          </div>
        </Router> 
        
      </Container>
    )
  }
}