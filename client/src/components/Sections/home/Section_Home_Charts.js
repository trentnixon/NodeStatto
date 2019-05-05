import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";

// import Title from "../../Elements/type/PageTitle";
// import SubTitle from "../../Elements/type/PageSubTitle";

// Charts
import GamesPlayed from "../../Elements/InteractiveCharts/PieChartGamesPlayed_Dashboard";
import PlayedFor from "../../Elements/Tables/PlayedForList";

export default class Section_Default extends Component { 
    componentWillMount() {} 
    render() {
     //   console.log(this.props.isVisible)
        return ( 
                <div className="Section_Charts" > 
                    <Row class="ContainerRow">
                        <Pod col="col-md-12" > 
                            <Row>
                                <Pod col="col-md-7" canvas="canvas1"> 
                                    <PlayedFor
                                            Label="Teams Played for"
                                            {... this.props}
                                            num={5}
                                        /> 
                                </Pod>
                                <Pod col="col-md-5" canvas="canvas1"> 
                                        <GamesPlayed 
                                            {... this.props}
                                            Title="Games Played"
                                        />
                                     
                                </Pod>
                            </Row>
                        </Pod>
                    </Row>
                </div> 
            )
        }
    } 