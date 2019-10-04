import React, { Component } from 'react';
// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import ChartContainer from "../../../../Template/Page/ChartContainer";

// Sections
import InteractiveChart from "../../../../Charts/MixedChart";
// Variables
let Series=[],RUNS=[],AVG=[], NO=[],SR=[],BALLS=[],DATES=[];
export default class Home_Overview extends Component {

    Create(Data){
        RUNS=[]
        NO=[];
        SR=[];
        BALLS=[];
        DATES=[];
        AVG=[]
        Data.map((game,i)=>{
            if(game.Batting){
                console.log(game)
                RUNS.push(game.Batting.RunInt);
                BALLS.push(game.Batting.BallsFacedInt)
                if(game.Batting.NotOut === 1){ NO.push(1)}
                AVG.push((RUNS.reduce((a, b) => a + b, 0)/ (Data.length - NO.length)).toFixed(2))
                SR.push((RUNS.reduce((a, b) => a + b, 0)/BALLS.reduce((a, b) => a + b, 0)*100).toFixed(2))
                DATES.push(game.Meta.Opposition)
            }
        })

        return [
            RUNS,
            AVG,
            SR,
            DATES
        ];
    }
    createSeries(DATA){
        let CreateData = this.Create(DATA);
        Series = [{
            name: 'Runs',
            type: 'column',
            data: CreateData[0]
          }, {
            name: 'Average',
            type: 'area',
            data: CreateData[1]
          }, {
            name: 'Strike Rate',
            type: 'area',
            data: CreateData[2]
          }
        ];

          this.setState({ 
            Series:Series,
            Labels:CreateData[3],

        })
    }
     
    componentWillMount() { 
       this.createSeries(this.props.Data) 
     } 
    render() {
        
        return (
            <Row className="PodRow">
              <ChartContainer
                        Info={this.props.TITLES.SITE.DESC.TODO}
                        Interactive={true}
                        Title="Runs - Average - Strike Rate"
                        flex=" flex-100"
                    >
                    <Pod canvas="canvas1 " className="flex-100">
                        <InteractiveChart 
                            Labels={this.state.Labels}
                            series={this.state.Series} 
                        />
                    </Pod>
                    </ChartContainer>
            </Row>
       
            )
        }
    } 