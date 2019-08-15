import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';

import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";

import RankingPods from "../../../../Elements/pods/RankingPods";
import Title from "../../../../Elements/type/PageTitle";
import SubTitle from "../../../../Elements/type/PageSubTitle";

import Chart from "../../../../Charts/LineChart";


let Labels=[],Series=[];
export default class Section_Rankings extends Component {
    
    
    CreateRanking(arr){
        let Series=[]
            arr.map((rank,i)=>{
                Series.push(rank.rank) 
            })
        return Series;
    }
    componentWillMount() {

       Series =  [
            {
              name: 'Batting',
              data: this.CreateRanking(this.props.Rankings.Batting)
            },
            { 
                name: 'Bowling',
                data: this.CreateRanking(this.props.Rankings.Bowling)
            },
            {
                name: 'Keeping',
                data: this.CreateRanking(this.props.Rankings.Keeping)
            }
          ]
    } 
    render() {
        console.log(this.props.Rankings.Batting,Series)
        return ( 
                <Row class="PodRow">
                    
                    <Title Title={this.props.TITLES.SITE.TITLES.RANKINGS}/>

                    <SubTitle Title={this.props.SubTitle} />
                        
                    <Title Title={this.props.TITLES.SITE.TITLES.BATTING}/>
                        <div className="RankingInt canvas1">
                            <RankingPods Rankings={this.props.Rankings.Batting}  />
                        </div>
                    
                    <Title Title={this.props.TITLES.SITE.TITLES.BOWLING}/>
                        <div className="RankingInt canvas1">
                            <RankingPods Rankings={this.props.Rankings.Bowling}  />
                        </div>

                    <Pod canvas="canvas1" class="LineChart">
                        <Chart  series={Series} labels={Labels} />
                    </Pod> 

                </Row>
            )
        }
    } 

    /**
     *  <Title Title={this.props.Title}/>
                        <RankingPods Rankings={this.props.Rankings.Keeping}  />
     */