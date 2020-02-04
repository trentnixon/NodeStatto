import React, { Component } from 'react';
import ListBowling from "../../../../Venders/MaterialUI/Lists/List_ScoreCard_Bowling";
import Container from "../../../../Template/Page/Containers/Container";
import {Bowling} from "../../../../Template/Utilities/Icons/icons";
import WrapUp from "../Sections/ScoreBowlingWrapUp";
export default class Home_Overview extends Component {
    componentWillMount() {} 
    render() {
        return (
            <Container>
                <div className="Scorecard Header ListItem">
                        <div className="Player">
                            <h1><Bowling /> Bowling</h1>
                        </div>

                        <div className="Overs">
                        <small>O</small>
                        </div>
                        <div className="Wickets">  
                        <small>W</small>
                        </div>

                        <div className="BowlingRuns">
                            <small>R</small>
                        </div>
                        <div className="Economy">
                            <small>E</small>
                        </div>
                </div>
                {
                        this.props.List.map((player,i)=>{
              
                            if(player[6] !== '0.0'){
                                return( 
                                    <ListBowling item={player} key={i}/>
                                )
                            }
                            return true;
                        })
                    } 
                    <WrapUp SC={this.props.List}/>
                </Container>
            )
        }
    } 

 /**
  * {
                        // eslint-disable-next-line
                        this.props.List.map((player,i)=>{
                 
                            if(player[6] !== '0.0'){
                                return(
                                    <div key={i}>
                                        {player[0].Name}
                                        {player[6]}
                                        {player[7]}
                                        {player[8]}
                                        {player[9]}
                                    </div>
                                )
                            }
                        })
                }
  */