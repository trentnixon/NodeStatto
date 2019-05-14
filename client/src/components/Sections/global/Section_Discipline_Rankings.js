import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
// import Pod from "../../Template/Page/Pod";

import RankingPods from "../../Elements/pods/RankingPods";
import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

import Chart from "../../Charts/LineChart";

let RankingValue=[
    { 
        name:"Ranking",
        data:[]
    }
];

let Labels=[];


export default class Section_Rankings extends Component {
    
    state = {
        Data: RankingValue,
        Labels:Labels,
        Created:0

      }
    componentWillMount() {
        RankingValue=[{ name:"Ranking",data:[] }];
        Labels=[];

        // eslint-disable-next-line
        this.props.Rankings.map((rank,i)=>{
            //console.log(rank)
            RankingValue[0].data.push(rank.rank);
            Labels.push(rank.date)
        })
        this.setState(
            { 
                Data: RankingValue,
                Labels:Labels,
                Created: Math.round((new Date()).getTime() / 1000)
             }
        )
    } 
    render() {
       //console.log(this.props.Rankings)  
        return ( 
                <div className="Section_Rankings" >
                    <Title Title={this.props.Title}/>
                    <SubTitle Title={this.props.SubTitle} />
                    <Row>
                        <div className="ContentContainer canvas1 col-9">
                            <div className="Body">
                                        <Chart 
                                            series={this.state.Data}
                                            Labels={this.state.Labels}
                                            Created={this.state.Created} 
                                            visable={this.props.isVisible}
                                        />
                                    </div>
                            </div>

                            <div className="ContentContainer canvas1 col-3 ">
                                    <div className="Body RankingInt">
                                        <RankingPods 
                                            Rankings={this.props.Rankings} 
                                            visable={this.props.isVisible}
                                        />
                            </div>
                        </div>
                    </Row>
                </div> 
            )
        }
    } 