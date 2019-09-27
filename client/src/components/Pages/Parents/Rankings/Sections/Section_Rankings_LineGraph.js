import React, { Component } from 'react';
// import {isMobile} from 'react-device-detect';


// Template
import Row from "../../../../Template/Page/Row";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import RankingPods from "../../../../Elements/pods/RankingPods";
import Title from "../../../../Elements/type/PageTitle";
//import SubTitle from "../../../../Elements/type/PageSubTitle";
//import InfoPopover from "../../../../Elements/type/InfoPopOver";
// Charts
import Chart from "../../../../Charts/AreaChart";

// Variables
let Labels=null,Series=[];

// Start Class
export default class Section_Rankings extends Component {
    
    
    IsTrue(Var){ 
        let IsTrue = true;
        //console.log(Var)
            if(Var === null){ IsTrue = false}
            if(Var === 0){ IsTrue = false}
        return IsTrue;
    }
    CreateRanking(arr,vari){
        let Series=[]
    
            arr.map((rank,i)=>{
                if(this.IsTrue(rank[vari])){
                    Series.push(rank[vari]) 
                }
                return true;
            })
        return Series;
    }

    CreateLabels(arr){
        let Labels=[];
        arr.map((row,i)=>{
            if(this.IsTrue(row.Batting) || this.IsTrue(row.Bowling)){
                Labels.push(row.ThisDate)
            }
            return true;
        })
        return Labels;
    }
    componentWillMount() { 

       Series =  [
            {
              name: 'Batting',
              data: this.CreateRanking(this.props.Rankings.Combined,'Batting')
            },
            { 
                name: 'Bowling',
                data: this.CreateRanking(this.props.Rankings.Combined,'Bowling') 
            },
            {
                name: 'Keeping',
                data: this.CreateRanking(this.props.Rankings.Combined,'Keeping')
            }
          ]
          Labels=this.CreateLabels(this.props.Rankings.Combined)
    } 
    render() {
        return ( 
                <Row className="PodRow ">
                    
                
                    <Title Title={this.props.TITLES.SITE.TITLES.BATTING}/>
                        <div className="RankingInt canvas1">
                            <RankingPods Rankings={this.props.Rankings.Batting}  />
                        </div>
                    
                    <Title Title={this.props.TITLES.SITE.TITLES.BOWLING}/>
                        <div className="RankingInt canvas1">
                            <RankingPods Rankings={this.props.Rankings.Bowling}  />
                        </div>

                   
                    <ChartContainer
                        Info={this.props.TITLES.SITE.DESC.RANKINGLINE}
                        Interactive={true}
                        Title="Career Ranking Progression"
                        flex=" flex-100"
                    >
                        <Pod canvas="canvas1" className=" flex-100">
                            <Chart  series={Series} Labels={Labels} />
                        </Pod> 

                    </ChartContainer>
                   

                </Row>
            )
        }
    } 

    /**
     *  <Title Title={this.props.Title}/>
                        <RankingPods Rankings={this.props.Rankings.Keeping}  />
     */