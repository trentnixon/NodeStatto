import React, { Component } from 'react';
import {connect } from 'react-redux';

import PageHeader from "../../../Template/Page/Header";

// Sections
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";
import ScoreCardHeader from "./ScoreCardHeader";


// Fetch ScoreCards
import {FetchScoreCard} from "../../../../actions/Scorecard";

const ScoreCard = new FetchScoreCard();

class ScoreCardFrame extends Component {

  componentWillMount() {
       
        ScoreCard.Gameid = 238015;
        ScoreCard.start();
   }

   shouldComponentUpdate(){return true;}
    
   componentDidUpdate(nextProps, nextState){}
  render() {
    //console.log(this.props.SC)

    if(this.props.SC.SC_Loading !== true){
      return(
        <div>          
          <Container>
              <SectionHeader h1="Scorecard" />

              <SectionContainer>
                    <p>Fetching Scroecard</p>
              </SectionContainer>
              
          </Container>
      </div>
      )
    }
    else{}
    return (
      <div>          
           <PageHeader> 
                <ScoreCardHeader 
                  Data={this.props.SC} 
                />
            </PageHeader>
          <Container>
              <SectionHeader h1="Scorecard" />

              <SectionContainer>
                 
              </SectionContainer>
              
          </Container>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({ 
  SC: state.SC,
})
export default connect(mapStateToProps)(ScoreCardFrame);