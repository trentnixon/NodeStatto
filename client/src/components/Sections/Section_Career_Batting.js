import React, { Component } from 'react';
import update from 'react-addons-update'

import Row from "../Template/Page/Row";
import Pod from "../Template/Page/Pod";
//import Title from "../Elements/type/PageTitle";
import SubTitle from "../Elements/type/PageSubTitle";

import MostForAgainst from "../Elements/Tables/MostForAgainst";

// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// Charts
import Radial from "../Charts/RankingRadial";

var _ = require('lodash');

let stats=[
    {
        Name:["Innings"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"]
    },
    {
        Name:["Runs"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"]
    },
    {
        Name:["Balls Faced"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"]
    },
    {
        Name:["Not Out's"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"]
    },
    {
        Name:["Average"],
        Value:[0], 
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"]
    },
    {
        Name:["Strike Rate"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"]
    }
];


export default class Section_Rankings extends Component {

    state = {
        labelWidth: 100,
        Year:"Career",
        stats:stats,
        Created:0,
      }

      handleChange = event => {
        this.createStats(this.props.Data,event.target.value)
      }

     createStats(Data,Year){
            
            this.setState({ 
                    Created: Math.round((new Date()).getTime() / 1000),
                    Year:Year
                })

            if(Year === "Career"){
                
                this.setState({
                    stats: update(this.state.stats,
                        {
                            0:{
                                Value:{$set:[Data.innings]},
                                Total:{$set:[Data.innings]},
                                Percentage:{$set:[this.findPercentage(Data.innings,Data.innings)]},
                            },
                            1:{
                                Value:{$set:[Data.runs]},
                                Total:{$set:[Data.runs]},
                                Percentage:{$set:[this.findPercentage(Data.runs,Data.runs)]}
                            },
                            2:{
                                Value:{$set:[Data.ballsFaced]},
                                Total:{$set:[Data.ballsFaced]},
                                Percentage:{$set:[this.findPercentage(Data.ballsFaced,Data.ballsFaced)]}
                            },
                            3:{
                                Value:{$set:[Data.notOut]},
                                Total:{$set:[Data.notOut]},
                                Percentage:{$set:[this.findPercentage(Data.notOut,Data.notOut)]}
                            },
                            4:{
                                Value:{$set:[Data.average]},
                                Total:{$set:[Data.average]},
                                Percentage:{$set:[this.findPercentage(Data.average,Data.average)]}
                            },
                            5:{
                                Value:{$set:[Data.strikeRate]},
                                Total:{$set:[Data.strikeRate]},
                                Percentage:{$set:[this.findPercentage(Data.strikeRate,Data.strikeRate)]}
                            }
                        }
                    ),
                  })
            }
            else{
                
                let YearPosition = _.findIndex(Data.overTheYears, function(o) { return o.int === Year; });
                let Path = Data.overTheYears[YearPosition];
                this.setState({
                    stats: update(this.state.stats,
                        {
                            0:{
                                Value:{$set:[Path.HistoryGames.length]},
                                Total:{$set:[Data.innings]},
                                Percentage:{$set:[this.findPercentage(Path.HistoryGames.length,Data.innings)]}
                            },
                            1:{
                                Value:{$set:[Path.TotalRuns]},
                                Total:{$set:[Data.runs]},
                                Percentage:{$set:[this.findPercentage(Path.TotalRuns,Data.runs)]}
                            },
                            2:{
                                Value:{$set:[Path.TotalBF]},
                                Total:{$set:[Data.ballsFaced]},
                                Percentage:{$set:[this.findPercentage(Path.TotalBF,Data.ballsFaced)]}
                            },
                            3:{
                                Value:{$set:[Path.NotOuts]},
                                Total:{$set:[Data.notOut]},
                                Percentage:{$set:[this.findPercentage(Path.NotOuts,Data.notOut)]}
                            },
                            4:{
                                Value:{$set:[(Path.TotalRuns/Path.HistoryGames.length)]},
                                Total:{$set:[Data.average]},
                                Percentage:{$set:[this.findPercentage((Path.TotalRuns/Path.HistoryGames.length),Data.average)]}
                            },
                            5:{
                                Value:{$set:[(Path.TotalRuns/Path.TotalBF*100).toFixed(2)]},
                                Total:{$set:[Data.strikeRate]},
                                Percentage:{$set:[this.findPercentage((Path.TotalRuns/Path.TotalBF*100),Data.strikeRate)]}
                            }
                        }
                    ),
                  })
            }
     }  



     // Functions
    findPercentage(int,total){ 
        let Perc = (int/total)*100;
        if(Perc  > 100){ Perc = 100}
        return Perc;
    }
    componentWillMount() {  this.createStats(this.props.Data,"Career"); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    render() {

        return (
            <div className="Section_Career atAGlance">

            <Row >
                <Pod col="col-md-12 Selector" >
                    <FormControl variant="outlined" className="YearSelector" >
                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                            Select a Year 
                        </InputLabel>
                        <Select
                            value={this.state.Year}
                            onChange={this.handleChange}
                            input={ <OutlinedInput 
                                                labelWidth={this.state.labelWidth}
                                                name="year"
                                                id="outlined-year-simple"
                                            />
                                        }
                                    >
                                    <MenuItem value="Career" >Career</MenuItem>
                                        {
                                            this.props.Data.overTheYears.map((year,i)=>{
                                                return(
                                                    <MenuItem key={i} value={year.int}>{year.int}</MenuItem>
                                                )
                                            })
                                }
                        </Select>
                    </FormControl>
                </Pod>
            </Row>   


            <Row > 
                <Pod col="col-md-4 ToDo">
                        <SubTitle Title={this.state.Year}/>
                        <MostForAgainst 
                        
                            Table={this.state.stats}
                        />
                </Pod>
                <Pod col="col-md-8 NakedPod" >

                <Row class="Radial" > 
                        <Pod col="col-md-4" >
                            <Radial 
                                Value={this.state.stats[0].Value}
                                Label={this.state.stats[0].Name}
                                Percentage={this.state.stats[0].Percentage}
                                Created={this.state.Created}
                            />
                            <SubTitle Title={this.props.Data.innings} />
                            <SubTitle Title={'Career Innings'} />
                            
                        </Pod>


                        <Pod col="col-md-4" > 
                            <Radial 
                               Value={this.state.stats[1].Value}
                               Label={this.state.stats[1].Name}
                               Percentage={this.state.stats[1].Percentage}
                               Created={this.state.Created}
                            />
                          <SubTitle Title={this.props.Data.runs } />
                            <SubTitle Title={'Career Runs'} />
                        </Pod>

                        <Pod col="col-md-4" > 

                            <Radial 
                                Value={this.state.stats[2].Value}
                                Label={this.state.stats[2].Name}
                                Percentage={this.state.stats[2].Percentage}
                                Created={this.state.Created}
                                />
                            <SubTitle Title={this.props.Data.ballsFaced} />
                            <SubTitle Title={'Career Balls Faced'} />
                        </Pod>



                        <Pod col="col-md-4" > 

                            <Radial 
                               Value={this.state.stats[3].Value}
                               Label={this.state.stats[3].Name}
                               Percentage={this.state.stats[3].Percentage}
                               Created={this.state.Created}
                            />
                          <SubTitle Title={this.props.Data.notOut} />
                            <SubTitle Title={'Career Not outs'} />

                        </Pod>
                        <Pod col="col-md-4" >
                        <Radial 
                               Value={this.state.stats[4].Value}
                               Label={this.state.stats[4].Name}
                               Percentage={this.state.stats[4].Percentage}
                               Created={this.state.Created}
                            />
                          
                          <SubTitle Title={this.props.Data.average} />
                            <SubTitle Title={'Career Average'} />
                          
                        </Pod>
                        <Pod col="col-md-4" >

                        <Radial 
                               Value={this.state.stats[5].Value}
                               Label={this.state.stats[5].Name}
                               Percentage={this.state.stats[5].Percentage}
                               Created={this.state.Created}
                            />
                          
                          <SubTitle Title={this.props.Data.strikeRate} />
                            <SubTitle Title={'Career Strike Rate'} />
                          
                        </Pod>
                        </Row > 
                    </Pod>
                </Row>
            </div>
            )
        }
    } 