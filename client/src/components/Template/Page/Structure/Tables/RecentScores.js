import React, { Component } from 'react';


export default class BattingRecentScores extends Component {

    componentWillMount() { }
    render() {
        return (<div>


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
                                <h1>Runs</h1>
                            </div>
                            <div className="GameBalls"> 
                                <h1>Balls</h1>
                            </div>
                    </div>
                    {
                                // eslint-disable-next-line 
                                this.props.Data.slice(0,10).map((game,i)=>{
                               
                                    if(game.Batting){
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
                                                        <h1>{game.Batting.RunsValue}</h1>
                                                    </div>
                                                    <div className="GameBalls"> 
                                                        <h1>{game.Batting.BallsFaced}</h1>
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