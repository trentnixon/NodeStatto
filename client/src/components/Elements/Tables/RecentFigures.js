import React, { Component } from 'react';
export default class BattingRecentScores extends Component {
    componentWillMount() { }
    render() {
        return (
                <div className="Table " id="RecentScores" >
                     <div className="ListItem Header">
                            <div className="For">
                                <h1>For</h1>
                            </div>
                            <div className="Against">
                                <h1>Against</h1>
                            </div>
                            <div className="Date">
                                <h1><small>Date</small></h1>
                            </div>

                            
                            <div className="GameRuns"> 
                                <h1>Figures</h1>
                            </div>
                            <div className="GameBalls"> 
                                <h1>Overs</h1>
                            </div>
                    </div>

                            {
                                // eslint-disable-next-line
                                this.props.Data.map((game,i)=>{
                                    
                                    if(game.Bowling){
                                        return(
                                           
                                            <div className="ListItem" key={i}>
                                                <div className="For">
                                                    <h1>{game.Meta.Team}</h1>
                                                </div>
                                                <div className="Against">
                                                    <h1>{game.Meta.Opposition}</h1>
                                                </div>
                                                <div className="Date">
                                                    <h1><small>{game.Meta.Date}</small></h1>
                                                </div>
                    
                                                
                                                <div className="GameRuns">
                                                    <h1>{game.Bowling.Figures}</h1>
                                                </div>
                                                <div className="GameBalls"> 
                                                    <h1>{game.Bowling.Overs}</h1>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                       
                </div>
            )
        }
    }