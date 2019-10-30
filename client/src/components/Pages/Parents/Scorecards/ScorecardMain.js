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
import Tabber from "../../../Template/Tabber/TabContaner";

//import ScoreCardHeader from "./ScoreCardHeader";
import ScoreCardMeta from "./Sections/ScoreCardMeta";
import BattingList from "./Sections/ScoreCardTeamListBatting";
import BowlingList from "./Sections/ScoreCardTeamListBowling";
import Worm from "./Sections/Scorecard_LineGraph";
import Comparison from "./Sections/Scorecard_BattingOrderComparison";
// Fetch ScoreCards
import {FetchScoreCard} from "../../../../actions/Scorecard";


const ScoreCard = new FetchScoreCard();
let Game;


function First(props){
  console.log(props);
  return (
    <SectionContainer>
                  <Row className="PodRow">
                    <Title Title={props.SC.ScoreMeta.Meta.first.Name + ' '+ props.SC.ScoreMeta.Meta.first.Runs+'/'+props.SC.ScoreMeta.Meta.first.For+' ('+props.SC.ScoreMeta.Meta.first.Overs+')'} />
                    <Pod className="flex-100" canvas="canvas1">
                      <BattingList List={props.SC.Scorecard[0]}/>
                      <BowlingList List={props.SC.Scorecard[1]}/>
                    </Pod>
                  </Row>
                </SectionContainer>
  )
}

function Second(props){
  console.log(props);
  return (
    <SectionContainer>
                  <Row className="PodRow">
                  <Title Title={props.SC.ScoreMeta.Meta.second.Name + ' '+ props.SC.ScoreMeta.Meta.second.Runs+'/'+props.SC.ScoreMeta.Meta.second.For+' ('+props.SC.ScoreMeta.Meta.second.Overs+')'} />
                    <Pod className="flex-100" canvas="canvas1">
                      <BattingList List={props.SC.Scorecard[1]}/>
                      <BowlingList List={props.SC.Scorecard[0]}/>
                    </Pod>
                  </Row>
                </SectionContainer>
  )
}




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

              <SectionContainer className="ScorecardScores"> 
                    <ScoreCardMeta SC={this.props.SC}/>
                    <Title Title={Game.ScoreMeta.Meta.Result[0] +' '+ Game.ScoreMeta.Meta.Result[1]} />
                </SectionContainer>
                

                <SectionContainer className="Scorecard">
                  <Tabber  
                      Tabs={
                        [  
                          {
                            Title: this.props.SC.ScoreMeta.Meta.first.Name,
                            Component:<First SC={this.props.SC}/>,
                            Icon:null  
                          },
                          {
                            Title:this.props.SC.ScoreMeta.Meta.second.Name,
                            Component:<Second SC={this.props.SC}/>,
                            Icon:null
                          } 
                      ]}
                  />  
              </SectionContainer>
               
          

                <SectionContainer>
                    <Worm SC={this.props.SC.ScoreCharts.Worm}/>
                </SectionContainer>

                <SectionContainer>
                    <Comparison SC={this.props.SC.ScoreCharts.BattingOrder}/>
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