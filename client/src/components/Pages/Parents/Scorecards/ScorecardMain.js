import React, { Component } from 'react';

//import {connect } from 'react-redux';
//import PageHeader from "../../../Template/Page/Header";

// Sections
import Container from "../../../Template/Page/Container";

import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";
//import ScoreCardHeader from "./ScoreCardHeader";


// Fetch ScoreCards
//import {FetchScoreCard} from "../../../../actions/Scorecard";
//const ScoreCard = new FetchScoreCard();

export default class ScoreCardFrame extends Component {

  componentWillMount() {
       
       // ScoreCard.Gameid = 238015;
       // ScoreCard.start();
       //console.log(this.props)
   }

   shouldComponentUpdate(){return true;}
    
   componentDidUpdate(nextProps, nextState){}
  render() {
    //console.log(this.props.SC)

    return (

          <Container>
              <SectionHeader h2="Scorecard" h1="Coming Soon"/>

              <SectionContainer>
                 
              </SectionContainer>
              
          </Container>

    )
    
   
  }
} 

/*
const mapStateToProps = (state) => ({ 
  SC: state.SC,
})
export default connect(mapStateToProps)(ScoreCardFrame);

*/