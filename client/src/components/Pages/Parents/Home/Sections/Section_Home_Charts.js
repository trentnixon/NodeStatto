import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";
import ChartRow from "../../../../Template/Page/ChartContainer";
// Charts
import GamesPlayed from "../../../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
import PlayedFor from "../../../../Elements/Tables/PlayedForList";

export default class Section_Default extends Component { 
    render() {
        return ( 
                <Row className="PodRow HomeCharts "> 
                      <ChartRow
                            flex="flex-40"
                            Info={this.props.TITLES.DESC.TEAMSPLAYEDFOR}
                            Interactive={false}
                        >
                            <PlayedFor
                                TITLES={this.props.TITLES.TITLES} 
                                CTA={this.props.CTA}
                                SUBS={this.props.SUBS}
                                num={5}
                                DATA={this.props.DATA.CLEAN}
                            />

                    </ChartRow>
                        
 
                    <ChartRow
                        flex="flex-60"
                        Info={this.props.TITLES.DESC.GAMESPLAYEDBAR}
                        Interactive={true}
                    >

                        <GamesPlayed  
                            TITLE={this.props.TITLES.TITLES}
                            DATA={this.props.DATA} 
                           
                        />
      
                </ChartRow>
            
                   
                </Row> 
            )
        }
    }    