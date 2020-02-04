import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";
import ChartRow from "../../../../Template/Page/Containers/ChartContainer";

// Charts
import GamesPlayed from "../../../../Venders/ApexCharts/InteractiveCharts/PieChartGamesPlayed_Dashboard";

export default class Section_Default extends Component {  
    render() {

        console.log(this.props)
        return ( 
            <Row className="PodRow HomeCharts "> 
                <ChartRow
                    flex="flex-100 flex-m-100"
                    DisplayIcons={{
                        "Info":this.props.TITLES.SITE.DESC.GAMESPLAYEDBAR,
                        "HasInfo":true,
                        "Interactive":true,
                        "Filterable":false
                    }}
                >
                    <GamesPlayed  
                        TITLES={this.props.TITLES}
                        DATA={this.props.DATA}
                    />
                </ChartRow>
            </Row> 
            )
        }
    }