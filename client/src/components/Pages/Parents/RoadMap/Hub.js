import React, { Component } from 'react';
// Template
import Container from "../../../Template/Page/Containers/Container";
import SectionContainer from "../../../Template/Page/Structure/Structure_IsVisable_Container";
import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";

import Overall from "./Sections/Overall";
import MapBatting from "./Sections/Batting";
import MapBowling from "./Sections/Bowling";
import Keeping from "./Sections/Keeping";
import ScoreCards from "./Sections/ScoreCards";
// Class


export default class RoadMap extends Component {
 
  componentWillMount() {}
  render() {

    return ( 
            <Container>    
                 <SectionHeader h1="RoadMap" h2="Stattos Development Outline"/>
                 <SectionHeader h1="Progress" h2=""/>

                <SectionContainer>
                    <Overall />
                    <MapBatting />
                    <MapBowling />
                    <Keeping />
                    <ScoreCards />
                </SectionContainer>       
            </Container>
    )
  }
} 