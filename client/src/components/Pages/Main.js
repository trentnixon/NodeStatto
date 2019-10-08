import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Frame from "../Template/Frame";
import {PageView, BasicTracking} from "../../actions/ga";

// Components
import ComponentHome from "./Parents/Home/Home";
import ComponentHistory from "./Parents/History/History";
import RankingHub from "./Parents/Rankings/Hub";
import BattingHub from "./Parents/Batting/Hub";
import BowlingHub from "./Parents/Bowling/Hub";
import ComponentPlayFor from "./Parents/Home/PlayerForFullList";
import ComponentSearch from "./Parents/search/search";
import ComponentScorecard from "./Parents/Scorecards/ScorecardMain";
import ComponentFlorish from "./Parents/Florish/Hub";
/*
import ComponentKeeping from "./Parents/Keeping/Keeping";
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
import  {Batting, Wickets,Bowling,Runs} from "../Icons/icons";
//Keeping,


const  Navigation =[
  {
    "label":"Rankings", 
    "path":"rankings",
    "icon":<Search/>, 
    "children":null
  },
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
        },
        {
          "label":"Average",
          "path":"averages",
          "icon":<ShowChart/>
        },
        {
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
          "label":"Milestones",
          "path":"milestones",
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
      },{
        "label":"Wickets",
        "path":"wickets",
        "icon":<Wickets/>
      },{
        "label":"AES",
        "path":"aes",
        "icon":<MultilineChart/>
      },
      {
        "label":"Form",
        "path":"formguide",
        "icon":<ShowChart/>
      },{
        "label":"Notable Figures",
        "path":"notable",
        "icon":<Looks4/>
      },{
        "label":"Milestones",
        "path":"milestones",
        "icon":<Bowling/>
      },
      
      {
        "label":"For & Against",
        "path":"foragainst",
        "icon":<People/>
      }
    ],
    "icon":<Bowling/>
  },

  /**
   * 
   * // Extra Bowling Pages
   * 
      ,

   */
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
    "label":"Florish Data", 
    "path":"florish/overview",
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
  componentWillMount() { 
    
  }  
  render() {
    
    //console.log(this.props, window.location.pathname + window.location.search)

    PageView(window.location.pathname + window.location.search)
    BasicTracking(this.props.DATA_SETUP.SelectTeamID,this.props.PLAYER_DATA.Primary.Meta.Name, window.location.pathname)

    return (
      <Router basename={'/'+this.props.DATA_SETUP.SelectTeamID+'/'+this.props.DATA_SETUP.SelectedPlayerID }>
          <Frame {... this.props} Navigation={Navigation} >
            <div id="display-statto-app"> 
                
                <Route  exact path='/' render={()=> <ComponentHome {... this.props}/> }/>
                <Route  exact path='/playedfor' render={()=> <ComponentPlayFor {... this.props}/> }/>
                <Route  path="/history" render={()=> <ComponentHistory {... this.props} /> }/>
                <Route  path="/rankings" render={()=> <RankingHub  {... this.props} /> }/>
                <Route  path="/batting" render={()=> <BattingHub  {... this.props} /> }/>
                <Route  path="/bowling" render={()=> <BowlingHub  {... this.props} /> }/>
                <Route  path="/search" render={()=> <ComponentSearch {... this.props}/> }/>
                <Route  path="/florish" render={()=> <ComponentFlorish {... this.props}/> }/>
                
                <Route  exact path="/scorecard/:gameid" render={()=> <ComponentScorecard {... this.props}/> }/>
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

                
                <Route  exact path="/:id/dev/datatable" render={()=> <DevDisplayDataTable {... this.props}/> }/>
 * 
 */