import React, { Component } from 'react';

import Container from "../../../Template/Page/Containers/Container";
import SectionContainer from "../../../Template/Page/Structure/Structure_IsVisable_Container";
import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";

var _ = require('lodash');

let level='';
export default class Batting extends Component {

  componentWillMount() {}


  CreateString(DataArr, PushTo, Var, Value){

    let YearlList=["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];
    YearlList.map((year,i)=>{

        let Find = _.find(DataArr, [Var, year]);
        if(Find){  PushTo.push( PushTo[i] + Find[Value] ); }
        else{ PushTo.push(PushTo[i] + 0); }
      return true;
    })

    return PushTo.splice(1, YearlList.length);
  }


  render() {

    const PRIMARY = this.props.PLAYER_DATA.Primary;

    let BowlingResultNew=[0],BattingresultNew=[0],GamesresultNew=[0];

    BowlingResultNew = this.CreateString(PRIMARY.CAREER.Bowling.overTheYears,BowlingResultNew,'int','TotalWickets' );
    BattingresultNew = this.CreateString(PRIMARY.CAREER.Batting.overTheYears,BattingresultNew,'int','TotalRuns' );
    GamesresultNew = this.CreateString(PRIMARY.CAREER.Meta.Games.history,GamesresultNew,'year','Int' );

    
    // eslint-disable-next-line
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
        case 5:
                level='500 - 600 Games'
            break;
      }

    return ( 
      <Container> 
        <SectionHeader   h1="Bar Race Data"  /> 
        <SectionContainer  className="Section_Bowling_Wickets todo"> 

            <h1>Runs</h1>
          
            <p>{PRIMARY.Meta.Name},{level},0,{BattingresultNew.toString()}</p>
            
            <h1>Wickets</h1>
        
            <p>{PRIMARY.Meta.Name},{level},0,{BowlingResultNew.toString()}</p>
            

            <h1>Games Played</h1>
         
            <p>{PRIMARY.Meta.Name},{level},0,{GamesresultNew.toString()}</p>
            
        </SectionContainer>
    </Container> 
    )
  }
}

/**
 *  Notes
 */