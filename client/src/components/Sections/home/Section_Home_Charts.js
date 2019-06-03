import React, { Component } from 'react';
import Row from "../../Template/Page/Row";

// Charts
import GamesPlayed from "../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
import PlayedFor from "../../Elements/Tables/PlayedForList";

export default class Section_Default extends Component { 
    render() {

        return ( 
                <Row class="PodRow HomeCharts">
                        <PlayedFor
                            Label={this.props.TITLES.TEAMS}
                            num={5}
                            {... this.props}
                        />
                        <GamesPlayed 
                            {... this.props}
                            Title={this.props.TITLES.PLAYED}
                        />
                </Row> 
            )
        }
    }   