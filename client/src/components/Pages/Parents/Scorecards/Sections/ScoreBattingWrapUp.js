import React, { Component } from 'react';

import Container from "../../../../Template/Page/Containers/Container";
//import {Batting} from "../../../../Template/Utilities/Icons/icons";

let WrapUp=[0,0,0]
export default class Home_Overview extends Component {
   
    CreateWrap(SC){
        WrapUp=[0,0,0]
        this.props.SC.map((player,i)=>{
            
            WrapUp[0] = parseInt(WrapUp[0],10)+parseInt(player[2],10)
            WrapUp[1] = parseInt(WrapUp[1],10)+parseInt(player[3],10)
            WrapUp[2] = (WrapUp[0]/ WrapUp[1]*100).toFixed(2)
           
            return true
        })
    return WrapUp;
    }
    componentWillMount() {} 
    
    render() {
        WrapUp=[]
        WrapUp = this.CreateWrap(this.props.SC);

        return (
                <Container>
                   <div className="Scorecard WrapUp ListItem">
                            <div className="Player">
                                <h1>Wrap Up</h1>
                            </div>

                            <div className="HowOut">
                            <small></small>
                            </div>
                            <div className="Runs">  
                            <h2>{WrapUp[0]}</h2>
                            </div>

                            <div className="Balls">
                                <small>{WrapUp[1]}</small>
                            </div>
                            <div className="StrikeRate">
                                <small>{WrapUp[2]}</small>
                            </div>
                    </div>
                    
                </Container> 
            )
        }
    }