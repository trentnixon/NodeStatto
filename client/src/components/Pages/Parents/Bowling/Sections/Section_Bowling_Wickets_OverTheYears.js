import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import SubTitle from "../../../../Elements/type/PageSubTitle";
// Charts
import Bar from "../../../../Charts/BarChart";

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