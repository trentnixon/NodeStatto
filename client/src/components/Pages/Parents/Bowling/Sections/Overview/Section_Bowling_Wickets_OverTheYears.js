import React, { Component } from 'react';

// Template
import Row from "../../../../../Template/Page/Row";
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic"
import SubTitle from "../../../../../Template/Page/Typography/PageSubTitle";
// Charts
import Bar from "../../../../../Venders/ApexCharts/BarChart";

let Labels=[];
let RunsYear=[
    { 
        name:"BallsFaced",
        data:[]
    },
    {
        name:"Innings",
        data:[]
    }
];

export default class Section_Bowling_WicketsOverTheYears extends Component {
    componentWillMount() {

        Labels=[]
        RunsYear=[
            { 
                name:"Wickets",
                data:[]
            }
        ];

        // eslint-disable-next-line
        this.props.Data.map((h,i)=>{  
                RunsYear[0].data.push(h.TotalWickets);
                Labels.push(h.int);
          })
    }
    render() {
        return (
             <Row className="PodRow">
                <SubTitle  Title="Wickets over year" />
                    <Pod className="flex-100" canvas="canvas1">
                        <Bar 
                            series={RunsYear} 
                            Labels={Labels}
                            horizontal={false}
                        />
                    </Pod>  
            </Row>            
            )
        }
    } 