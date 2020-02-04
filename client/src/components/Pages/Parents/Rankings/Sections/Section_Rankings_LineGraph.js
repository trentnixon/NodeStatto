import React, { Component } from 'react';
// import {isMobile} from 'react-device-detect';

// Template
import Row from "../../../../Template/Page/Row";
import ChartContainer from "../../../../Template/Page/Containers/ChartContainer";
import Pod from "../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";
import RankingPods from "../../../../Template/Page/Structure/Pods/PodType/RankingPods";
import Title from "../../../../Template/Page/Typography/PageTitle";

// Charts
import Chart from "../../../../Venders/ApexCharts/AreaChart";

// Variables
let Labels=null,Series=[];

// Start Class
export default class Section_Rankings extends Component {
    
     
    IsTrue(Var){ 
        let IsTrue = true;
            if(Var === null){ IsTrue = false}
            if(Var === 0){ IsTrue = false}
        return IsTrue;
    }

    CreateRanking(arr,vari){
        let Series=[]
    
            arr.map((rank,i)=>{
                // if(this.IsTrue(rank[vari])){
                if(this.IsTrue(rank.Batting) || this.IsTrue(rank.Bowling) || this.IsTrue(rank.Keeping)){
                    Series.push(rank[vari]) 
                }
                return true;
            })
        
            console.log("Series", Math.max(...Series),Series, vari)
        if(Math.max(...Series)=== 0){Series=[]}
        return Series;
    }

    CreateLabels(arr){
        let Labels=[];
        arr.map((row,i)=>{

            if(this.IsTrue(row.Batting) || this.IsTrue(row.Bowling) || this.IsTrue(row.Keeping)){
                Labels.push(row.ThisDate)
            }
            return true;
        })
        return Labels;
    }
    componentWillMount() {  

      //  console.log(this.props.Rankings.Combined);
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

          console.log(Series);

          Labels=this.CreateLabels(this.props.Rankings.Combined)
    } 
    render() {
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLES.SITE.DESC.RANKINGLINE,
            "Interactive":true,
            "Filterable":false 
          }
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
                        DisplayIcons={icons}
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