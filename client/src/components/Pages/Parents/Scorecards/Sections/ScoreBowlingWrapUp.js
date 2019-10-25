import React, { Component } from 'react';
import Container from "../../../../Template/Page/Container";

let WrapUp=[0,0,0,0]
export default class Home_Overview extends Component {

    CreateWrap(SC){
        WrapUp=[0,0,0,0]
        SC.map((player,i)=>{
            
            WrapUp[0] = parseFloat(WrapUp[0],10)+parseFloat(player[6],10)
            WrapUp[1] = parseFloat(WrapUp[1],10)+parseFloat(player[9],10)
            WrapUp[2] = parseFloat(WrapUp[2],10)+parseFloat(player[7],10)
            WrapUp[3] = (WrapUp[2]/WrapUp[0]).toFixed(2)
            return true
        })
        return WrapUp;
    }

    componentWillMount() {} 
    render() {
        WrapUp=[]
        WrapUp = this.CreateWrap(this.props.SC)
        return (
                <Container>
                   <div className="Scorecard WrapUp ListItem">
                   <div className="Player">
                            <h1>Wrap Up</h1>
                        </div>

                        <div className="Overs">
                            <h2>{WrapUp[0]}</h2>
                        </div>
                        <div className="Wickets">  
                        <h2>{WrapUp[1]}</h2>
                        </div>

                        <div className="BowlingRuns">
                            <h2>{WrapUp[2]}</h2>
                        </div>
                        <div className="Economy">
                            <small>{WrapUp[3]}</small>
                        </div>
                    </div>
                    
                </Container> 
            )
        }
    }