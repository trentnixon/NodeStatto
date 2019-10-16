import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import SubTitle from "../../../../Elements/type/PageSubTitle";
// Charts
import Donut from "../../../../Charts/donut"; 
import Bar from "../../../../Charts/BarChart";

let Labels=[], PieBalls=[];
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

        //PieRuns=[]
        Labels=[]
        PieBalls=[];

        RunsYear=[
            { 
                name:"Wickets",
                data:[]
            }
        ];
/**,
            {
                name:"Overs Bowled",
                data:[]
            } */
     //console.log(this.props.Data)
     // eslint-disable-next-line
        this.props.Data.map((h,i)=>{  
          
                //PieRuns.push(h.TotalWickets);
                PieBalls.push(h.TotalWickets)
                RunsYear[0].data.push(h.TotalWickets);
               // RunsYear[1].data.push(h.TotalOB);
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