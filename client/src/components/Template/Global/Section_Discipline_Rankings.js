import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';

import Row from "../../Template/Page/Row";
import Pod from "../../Elements/pods/Pod_Outer_Wrapper";

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
 
    RenderDataDown(data){
       
        let StripedArray = []; 
        let DivideBy=1;
        
        if (isMobile) {
           DivideBy = parseInt((data.length/10),10);
        }

        for (let i = 0; i < data.length; i = i+DivideBy) { 
            StripedArray.push(data[i]);
        };
    
        return StripedArray;
    }  
    
    componentWillMount() {
        RankingValue=[{ name:"Ranking",data:[] }];
        Labels=[];

        // eslint-disable-next-line 
        this.RenderDataDown(this.props.Rankings).map((rank,i)=>{
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
        return ( 
                <Row className="PodRow">
                    <Title Title={this.props.Title}/>
                    <SubTitle Title={this.props.SubTitle} />
                   
                    <div className="RankingInt canvas1">
                        <RankingPods Rankings={this.props.Rankings}  />
                    </div>

                    <Pod canvas="canvas1" className="LineChart">
                        <Chart  series={this.state.Data} Labels={this.state.Labels} />
                    </Pod>
                </Row>
            )
        }
    } 