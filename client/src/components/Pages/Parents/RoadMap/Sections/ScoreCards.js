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
import ShowChart from '@material-ui/icons/ShowChart'; 
import Looks4 from '@material-ui/icons/Looks4';


// <Badge className="" badgeContent={'new'} color="secondary">{"Form"}</Badge>,
const Rows=[
    {
        "label":"Overview", 
        "stage":"Testing",
        "icon":<AccountCircle/>, 
        "perc":'80',
        "date":""
    },{
        "label":"ScoreCard", 
        "stage":"Testing",
        "icon":<Looks4/>, 
        "perc":'80',
        "date":""
    },{
        "label":"Match Stats", 
        "stage":"ToDo",
        "icon":<ShowChart/>, 
        "perc":'40',
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