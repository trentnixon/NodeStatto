import React, { Component } from 'react';
import Container from "../../../../Template/Page/Containers/Container";
// import Badge from '@material-ui/core/Badge';
// Template

import SectionHeader from "../../../../Template/Page/Structure/Structure_Page_Header_Main";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
// Class

// Icons

import AccountCircle from '@material-ui/icons/AccountCircle';

// <Badge className="" badgeContent={'new'} color="secondary">{"Form"}</Badge>,
const Rows=[
    {
        "label":"Home Page", 
        "stage":"Ready",
        "icon":<AccountCircle/>, 
        "perc":'100',
        "date":""
  },{
        "label":"Rankings", 
        "stage":"InDevelopment",
        "icon":<AccountCircle />, 
        "perc":'80',
        "date":""
    },
    {
        "label":"Batting Section", 
        "stage":"Testing",
        "icon":<AccountCircle />, 
        "perc":'90',
        "date":""
    },
    {
        "label":"Bowling Section", 
        "stage":"Testing",
        "icon":<AccountCircle />, 
        "perc":'90',
        "date":""
    },
    {
        "label":"Keeping Section", 
        "stage":"ToDo",
        "icon":<AccountCircle />, 
        "perc":'0',
        "date":""
    },
    {
        "label":"Change Player ", 
        "stage":"InDevelopment",
        "icon":<AccountCircle />, 
        "perc":'80',
        "date":""
    },
    {
        "label":"Change Team ", 
        "stage":"InDevelopment",
        "icon":<AccountCircle />, 
        "perc":'80',
        "date":""
    },
    {
        "label":"Player History", 
        "stage":"Testing",
        "icon":<AccountCircle />, 
        "perc":'90',
        "date":""
    },
    {
        "label":"Scorecards", 
        "stage":"ToDo",
        "icon":<AccountCircle />, 
        "perc":'0',
        "date":""
    },
    {
        "label":"About", 
        "stage":"ToDo",
        "icon":<AccountCircle />, 
        "perc":'0',
        "date":""
    },{
        "label":"Mobile Compatibility", 
        "stage":"ToDo",
        "icon":<AccountCircle />, 
        "perc":'0',
        "date":""
    },{
        "label":"Copy Check", 
        "stage":"ToDo",
        "icon":<AccountCircle />, 
        "perc":'0',
        "date":""
    },{
        "label":"Domain Set up", 
        "stage":"ToDo",
        "icon":<AccountCircle />, 
        "perc":'0',
        "date":""
    },{
        "label":"Soft Launch", 
        "stage":"ToDo",
        "icon":<AccountCircle />, 
        "perc":'0',
        "date":""
    }
]


export default class RoadMap extends Component {
 
  componentWillMount() {}
  render() {

    return ( 
        <Container>
            <SectionHeader h1="Overall Progress" />
                    <ul className="roadMap">
                        <ListHeader /> 
                        { Rows.map((item,i)=>{ return( <ListItem key={i} item={item}/>) }) }
                    </ul>
        </Container>
       
    )
  }
} 