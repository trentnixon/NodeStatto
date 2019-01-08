import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";

import Title from "../../Elements/type/PageTitle";
//import SubTitle from "../../Elements/type/PageSubTitle";

// Charts
import GamesPlayed from "../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
import PlayedFor from "../../Elements/Tables/PlayedForList";
//import BarChartSmallRecentScores from "../../Elements/InteractiveCharts/BarChart_Small_RecentScores";



export default class Section_Default extends Component { 
    componentWillMount() {} 
    render() {
     //   console.log(this.props.isVisible)
        return ( 
                <div className="Section_Charts" >
                    <Row class="ContainerRow">
                        <Pod col="col-md-12" > 
                            <Row>
                             <Pod col="col-md-7" > 
                                    <PlayedFor
                                            Label="Teams Played for"
                                            {... this.props}
                                        />
                                </Pod>
                                <Pod col="col-md-5" > 
                                        <GamesPlayed 
                                            {... this.props}
                                            Title="Games Played over Career"
                                        />
                                     
                                </Pod>
                                
                                
                            </Row>
                        </Pod>
                    </Row>
                </div> 
            )
        }
    } 