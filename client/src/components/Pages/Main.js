import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frame from "../Template/Frame";
import ComponentHome from "./Parents/Home/Home";
import ComponentPlayFor from "./Parents/Home/PlayerForFullList";

import ComponentHistory from "./Parents/History/History";
import ComponentBatting from "./Parents/Batting/Batting";
import ComponentFormGuide from "./Parents/Batting/formguide";
import ComponentRuns from "./Parents/Batting/runs";
import ComponentAVG from "./Parents/Batting/avg";
import ComponentFOR from "./Parents/Batting/for";
import ComponentBowling from "./Parents/Bowling/Bowling";
import ComponentFormguide from "./Parents/Bowling/formguide";
import ComponentWickets from "./Parents/Bowling/wickets";
import ComponentBowlingFor from "./Parents/Bowling/for";
import ComponentBowlingAVG from "./Parents/Bowling/averages";
import ComponentKeeping from "./Parents/Keeping/Keeping";
import ComponentScorecard from "./Parents/Scorecards/ScorecardMain";
import ComponentSearch from "./Parents/search/search";
import ComponentAbout from "./Parents/about/about";
// Icons

import AccountCircle from '@material-ui/icons/AccountCircle';
import ShowChart from '@material-ui/icons/ShowChart';
import MultilineChart from '@material-ui/icons/MultilineChart';
import People from '@material-ui/icons/People';
import Settings from '@material-ui/icons/Settings';
import Search from '@material-ui/icons/Search';
import  {Batting, Bowling,Keeping, Wickets,Runs} from "../Icons/icons";


// DEV

import DevDisplayDataTable from "./Dev/DisplayData";

const  Navigation =[
    
  {
    "label":"Batting",
    "path":"batting",
    "children":[
        {
          "label":"Overview",
          "path":"",
          "icon":<AccountCircle/>,
        },
        {
          "label":"Form Guide",
          "path":"formguide",
          "icon":<ShowChart/>
        },
        {
          "label":"Runs",
          "path":"runs",
          "icon":<Runs/>
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
        "path":"",
        "icon":<AccountCircle/>
      },
      {
        "label":"Form Guide",
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
  {
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
  },
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
    console.log(this.props)
    return (
      <Router>
          <Frame {... this.props} Navigation={Navigation}>
            <div id="display-statto-app"> 
                
                <Route  exact path='/:id' render={()=> <ComponentHome {... this.props}/> }/>
                <Route  exact path='/:id/playedfor' render={()=> <ComponentPlayFor {... this.props}/> }/>

                <Route   path="/:id/history" render={()=> <ComponentHistory {... this.props}/> }/>
          
                <Route  exact path="/:id/batting" render={()=> <ComponentBatting {... this.props}/> }/>
                <Route  exact path='/:id/batting/formguide' render={()=> <ComponentFormGuide {... this.props}/> }/>
                <Route  exact path='/:id/batting/runs' render={()=> <ComponentRuns {... this.props}/> }/>
                <Route  exact path='/:id/batting/averages' render={()=> <ComponentAVG {... this.props}/> }/>
                <Route  exact path='/:id/batting/foragainst' render={()=> <ComponentFOR {... this.props}/> }/>

                <Route  exact path="/:id/bowling" render={()=> <ComponentBowling {... this.props}/> }/>
                <Route  exact path="/:id/bowling/formguide" render={()=> <ComponentFormguide {... this.props}/> }/>
                <Route  exact path="/:id/bowling/wickets" render={()=> <ComponentWickets {... this.props}/> }/>
                <Route  exact path="/:id/bowling/foragainst" render={()=> <ComponentBowlingFor {... this.props}/> }/>
                <Route  exact path="/:id/bowling/aes" render={()=> <ComponentBowlingAVG {... this.props}/> }/>

                <Route  exact path="/:id/keeping/" render={()=> <ComponentKeeping {... this.props}/> }/>

                <Route  exact path="/:id/search/" render={()=> <ComponentSearch {... this.props}/> }/>
                <Route  exact path="/:id/settings/" render={()=> <ComponentAbout {... this.props}/> }/>

                <Route  exact path="/:id/scorecard/:gameid" render={()=> <ComponentScorecard {... this.props}/> }/>
                <Route  exact path="/:id/dev/datatable" render={()=> <DevDisplayDataTable {... this.props}/> }/>
                
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
 *  
 * 
 */