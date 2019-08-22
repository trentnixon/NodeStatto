import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";

// Charts
import GamesPlayed from "../../../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
import PlayedFor from "../../../../Elements/Tables/PlayedForList";

export default class Section_Default extends Component { 
    render() {

        return ( 
                <Row className="PodRow HomeCharts "> 
                        <PlayedFor
                            TITLES={this.props.TITLES} 
                            CTA={this.props.CTA}
                            SUBS={this.props.SUBS}
                            num={5}
                            DATA={this.props.DATA.CLEAN}
                            className="flex-40"
                       
                        />
 
                        <GamesPlayed  
                            TITLE={this.props.TITLES}
                            DATA={this.props.DATA} 
                            className="flex-60"
                        />
                </Row> 
            )
        }
    }    