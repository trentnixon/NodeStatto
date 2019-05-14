import React, { Component } from 'react';

import Row from "../../Template/Page/Row";

// Charts
import GamesPlayed from "../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
import PlayedFor from "../../Elements/Tables/PlayedForList";

export default class Section_Default extends Component { 
    render() {
        //console.log(this.props.isVisible)
        return ( 
                <Row>
                        <PlayedFor
                            Label="Teams Played for"
                            {... this.props}
                            num={5}
                            col="col-md-7 col-sm-12"
                        />
                        
                        <GamesPlayed 
                            {... this.props}
                            Title="Games Played"
                            col="col-md-5 col-sm-12"
                        />
                </Row> 
            )
        }
    }  