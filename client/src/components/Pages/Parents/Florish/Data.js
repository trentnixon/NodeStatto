import React, { Component } from 'react';

import Container from "../../../Template/Page/Container";
import SectionContainer from "../../../Template/Global/SectionContainer";
import SectionHeader from "../../../Template/Global/Section_Global_Header";

var _ = require('lodash');

let EmptyArr=[0], level='noobie';
export default class Batting extends Component {

  componentWillMount() {}


  render() {

    let YealList=["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];
    const SITELABELS = this.props.LABELS.SITE;
    const PRIMARY = this.props.PLAYER_DATA.Primary;

    let Wickets = [0], Runs=[0], Games=[0];
    YealList.map((year,i)=>{

        let Bowlingresult = _.find(PRIMARY.CAREER.Career.bowling.overTheYears, ['int', year]);
        let Battingresult = _.find(PRIMARY.CAREER.Career.batting.overTheYears, ['int', year]);
        let Gamesresult = _.find(PRIMARY.CAREER.Career.Meta.Games.history, ['year', year]);

console.log(Gamesresult);
    
        if(Bowlingresult){
            Wickets.push( Wickets[i] + Bowlingresult.TotalWickets );
        }else{
            Wickets.push(Wickets[i] + 0);
        }

        if(Battingresult){
            Runs.push( Runs[i] + Battingresult.TotalRuns );
        }else{
            Runs.push(Runs[i] + 0);
        }

        if(Gamesresult){
            Games.push( Games[i] + Gamesresult.Int );
        }else{
            Games.push(Games[i] + 0);
        }

    })
    Wickets = Wickets.splice(1, YealList.length)
    Runs = Runs.splice(1, YealList.length)
    Games= Games.splice(1, YealList.length)

   console.log(PRIMARY);
    
    switch( Math.floor(PRIMARY.Meta.Matches/100) ) {
        case 0:
            level='Less than 100 Games'
          break;
        case 1:
            level='100 - 200 Games'
          break;
        case 2:
            level='200 - 300 Games'
          break;
          case 3:
                level='300 - 400 Games'
              break;
        case 4:
                level='400 - 500 Games'
                break;
        case 4:
                level='500 - 600 Games'
            break;
      }

    return ( 
      <Container> 
        <SectionHeader   h1="Bar Race Data"  /> 
        <SectionContainer  className="Section_Bowling_Wickets todo"> 

            <h1>Runs</h1>
            <p>{PRIMARY.Meta.Name},{level},0,{Runs.toString()}</p>

            <h1>Wickets</h1>
            <p>{PRIMARY.Meta.Name},{level},0,{Wickets.toString()}</p>

            <h1>Games Played</h1>
            <p>{PRIMARY.Meta.Name},{level},0,{Games.toString()}</p>
            
        </SectionContainer>
    </Container> 
    )
  }
}

/**
 *  Notes
 */