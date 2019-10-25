import React, { Component } from 'react';
import ListBatting from "../../../../Elements/Lists/List_ScoreCard_Batting";
import Container from "../../../../Template/Page/Container";
import {Batting} from "../../../../Icons/icons";
import WrapUp from "../Sections/ScoreBattingWrapUp";

export default class Home_Overview extends Component {
    componentWillMount() {} 
    render() {
       // console.log(this.props.List)
        return (
                <Container>
                    <div className="Scorecard Header ListItem">
                            <div className="Player">
                                <h1><Batting /> Batting</h1>
                            </div>

                            <div className="HowOut">
                            <small>HO</small>
                            </div>
                            <div className="Runs">  
                            <small>R</small>
                            </div>

                            <div className="Balls">
                                <small>B</small>
                            </div>
                            <div className="StrikeRate">
                                <small>SR</small>
                            </div>
                    </div>
                    {
                        this.props.List.map((player,i)=>{
                            if(player[1] !== '0'){
                                return( 
                                    <ListBatting item={player} key={i}/>
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