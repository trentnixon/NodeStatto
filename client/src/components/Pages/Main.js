import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frame from "../Template/Frame";

// Components
import ComponentHome from "./Parents/Home/Home";
import ComponentHistory from "./Parents/History/History";
import BattingHub from "./Parents/Batting/Hub";
import BowlingHub from "./Parents/Bowling/Hub";
import ComponentPlayFor from "./Parents/Home/PlayerForFullList";
import ComponentSearch from "./Parents/search/search";

/*
import ComponentKeeping from "./Parents/Keeping/Keeping";
import ComponentScorecard from "./Parents/Scorecards/ScorecardMain";
import ComponentAbout from "./Parents/about/about";
*/


// Icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShowChart from '@material-ui/icons/ShowChart'; 
import MultilineChart from '@material-ui/icons/MultilineChart';
import People from '@material-ui/icons/People';
import Settings from '@material-ui/icons/Settings';
import Search from '@material-ui/icons/Search';
import Looks4 from '@material-ui/icons/Looks4';
import  {Batting, Bowling,Wickets,Runs} from "../Icons/icons";
//Keeping


const  Navigation =[
    
  {
    "label":"Batting",
    "path":"batting",
    "children":[
        {
          "label":"Overview",
          "path":"overview",
          "icon":<AccountCircle/>,
        },{
          "label":"Runs",
          "path":"runs",
          "icon":<Runs/>
        },{
          "label":"Notable Scores",
          "path":"scores",
          "icon":<Looks4/>
        },
        {
          "label":"Form",
          "path":"formguide",
          "icon":<ShowChart/>
        },
        
        {
          "label":"By The Ball",
          "path":"by-the-ball",
          "icon":<Bowling />
        },
        {
          "label":"For & Against",
          "path":"foragainst",
          "icon":<People/>
        }
      ],
      "icon":<Batting/>
  },
  {
    "label":"Bowling",
    "path":"bowling",
    "children":[
      {
        "label":"Overview",
        "path":"overview",
        "icon":<AccountCircle/>
      },
      {
        "label":"Form",
        "path":"formguide",
        "icon":<ShowChart/>
      },
      {
        "label":"Wickets",
        "path":"wickets",
        "icon":<Wickets/>
      },
      {
        "label":"AES",
        "path":"aes",
        "icon":<MultilineChart/>
      },
      {
        "label":"For & Against",
        "path":"foragainst",
        "icon":<People/>
      }
    ],
    "icon":<Bowling/>
  },
  /*{
    "label":"Keeping",
    "path":"keeping",
    "children":[
      {
        "label":"Overview",
        "path":"",
        "icon":<AccountCircle/>
      }
    ],
    "icon":<Keeping/>
  },*/
  {
    "label":"Change Player", 
    "path":"search",
    "icon":<Search/>, 
    "children":null
  },
  {
    "label":"About",
    "path":"settings",
    "icon":<Settings/>,
    "children":null
  }
]  
export default class Statto extends Component {
  componentWillMount() { }  
  render() {
    //console.log(this.props)
    // <Route  exact path="/:id/keeping/" render={()=> <ComponentKeeping {... this.props}/> }/>
    return (
      <Router basename={'/'+this.props.DATA_SETUP.SelectTeamID+'/'+this.props.DATA_SETUP.SelectedPlayerID }>
          <Frame {... this.props} Navigation={Navigation} >
            <div id="display-statto-app"> 
                
                <Route  exact path='/' render={()=> <ComponentHome {... this.props}/> }/>
                <Route  exact path='/playedfor' render={()=> <ComponentPlayFor {... this.props}/> }/>
                <Route  path="/history" render={()=> <ComponentHistory {... this.props} /> }/>

                <Route  path="/batting" render={()=> <BattingHub  {... this.props} /> }/>
                <Route  path="/bowling" render={()=> <BowlingHub  {... this.props} /> }/>
                <Route  path="/search" render={()=> <ComponentSearch {... this.props}/> }/>
   
            </div>
          </Frame> 
      </Router> 
    )  
  }
}


/**
 *  COMPONENT NOTES
 *  
 *  
                <Route  exact path='/:id/playedfor' render={()=> <ComponentPlayFor {... this.props}/> }/>

                <Route  path="/search" render={()=> <ComponentSearch {... this.props}/> }/>
                <Route  exact path="/:id/search/" render={()=> <ComponentSearch {... this.props}/> }/>
                <Route  exact path="/:id/settings/" render={()=> <ComponentAbout {... this.props}/> }/>

                <Route  exact path="/scorecard/:gameid" render={()=> <ComponentScorecard {... this.props}/> }/>
                <Route  exact path="/:id/dev/datatable" render={()=> <DevDisplayDataTable {... this.props}/> }/>
 * 
 */