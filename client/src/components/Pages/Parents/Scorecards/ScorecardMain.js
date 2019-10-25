import React, { Component } from 'react';
import { matchPath } from 'react-router'
import {connect } from 'react-redux';

// Sections
import Container from "../../../Template/Page/Container";
import Pod from "../../../Elements/pods/Pod_Outer_Wrapper" 
import Row from "../../../Template/Page/Row";
import Title from "../../../Elements/type/PageTitle";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";

//import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardMeta from "./Sections/ScoreCardMeta";
import BattingList from "./Sections/ScoreCardTeamListBatting";
import BowlingList from "./Sections/ScoreCardTeamListBowling";
import Worm from "./Sections/Scorecard_LineGraph";
// Fetch ScoreCards
import {FetchScoreCard} from "../../../../actions/Scorecard";


const ScoreCard = new FetchScoreCard();
let Game;
class ScoreCardFrame extends Component {

  componentWillMount() {

       let matchPlayer = matchPath(window.location.pathname, { path: '/:team/:id/scorecard/:GID'})
       ScoreCard.Gameid = matchPlayer.params.GID;
       ScoreCard.start();

   }

   shouldComponentUpdate(){return true;}
   
   componentDidUpdate(nextProps, nextState){} 
   
   render() {
    //console.log("ScoreCards", this.props.SC);
        if(this.props.SC.SC_Loading !== true){
          return(
            <Container>
                <SectionHeader h2="Fetching" h1="Scorecard"/>
            </Container>
          )
      }
      else{
        console.log(this.props.SC)
        Game = this.props.SC;

        return (
            <Container>
              <SectionHeader h2="" h1="Scorecard"/>
            
             <SectionContainer className="ScorecardMeta">
                <Title Title={Game.ScoreMeta.Meta.Date} />
                <Title Title={Game.ScoreMeta.Meta.Time} />
                <Title Title={Game.ScoreMeta.Meta.Ground} />
                <Title Title={Game.ScoreMeta.Meta.Umpire} />
              </SectionContainer>

              <SectionContainer>
                    <ScoreCardMeta SC={this.props.SC}/>
                    <Title Title={Game.ScoreMeta.Meta.Result[0] +' '+ Game.ScoreMeta.Meta.Result[1]} />
                </SectionContainer>
               
                <SectionContainer>
                  <Row className="PodRow">
                    <Title Title={Game.ScoreMeta.Meta.first.Name + ' '+ Game.ScoreMeta.Meta.first.Runs+'/'+Game.ScoreMeta.Meta.first.For+' ('+Game.ScoreMeta.Meta.first.Overs+')'} />
                    <Pod className="flex-100" canvas="canvas1">
                      <BattingList List={this.props.SC.Scorecard[0]}/>
                      <BowlingList List={this.props.SC.Scorecard[1]}/>
                    </Pod>
                  </Row>
                </SectionContainer>

                <SectionContainer>
                  <Row className="PodRow">
                  <Title Title={Game.ScoreMeta.Meta.second.Name + ' '+ Game.ScoreMeta.Meta.second.Runs+'/'+Game.ScoreMeta.Meta.second.For+' ('+Game.ScoreMeta.Meta.second.Overs+')'} />
                    <Pod className="flex-100" canvas="canvas1">
                      <BattingList List={this.props.SC.Scorecard[1]}/>
                      <BowlingList List={this.props.SC.Scorecard[0]}/>
                    </Pod>
                  </Row>
                </SectionContainer>

                <SectionContainer>
                    <Worm SC={this.props.SC.ScoreCharts.Worm}/>
                </SectionContainer>
            </Container>
          )
      }   
  }
} 
 
const mapStateToProps = (state) => ({ 
  SC: state.SCORECARD,
})
export default connect(mapStateToProps)(ScoreCardFrame);