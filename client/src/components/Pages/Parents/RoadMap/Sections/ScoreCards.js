import React, { Component } from 'react';
import Container from "../../../../Template/Page/Container";

// import Badge from '@material-ui/core/Badge';
// Template

import SectionHeader from "../../../../Template/Global/Section_Global_Header";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
// Class

// Icons

import AccountCircle from '@material-ui/icons/AccountCircle';
import ShowChart from '@material-ui/icons/ShowChart'; 
import Looks4 from '@material-ui/icons/Looks4';


// <Badge className="" badgeContent={'new'} color="secondary">{"Form"}</Badge>,
const Rows=[
    {
        "label":"Overview", 
        "stage":"ToDo",
        "icon":<AccountCircle/>, 
        "perc":'0',
        "date":""
    },{
        "label":"ScoreCard", 
        "stage":"ToDo",
        "icon":<Looks4/>, 
        "perc":'0',
        "date":""
    },{
        "label":"Match Stats", 
        "stage":"ToDo",
        "icon":<ShowChart/>, 
        "perc":'0',
        "date":""
    }
]


export default class RoadMap extends Component {
 
  componentWillMount() {}
  render() {

    return ( 
        <Container>
            <SectionHeader h1="ScoreCards" />
                    <ul className="roadMap">
                        <ListHeader /> 
                        { Rows.map((item,i)=>{ return( <ListItem key={i} item={item}/>) }) }
                    </ul>
        `</Container>
       
    )
  }
} 