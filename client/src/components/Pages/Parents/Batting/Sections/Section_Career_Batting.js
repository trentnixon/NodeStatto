import React, { Component } from 'react';
import update from 'react-addons-update'

import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
// import Title from "../../../Elements/type/PageTitle";
// import SubTitle from "../../../../Elements/type/PageSubTitle";
// import MostForAgainst from "../../../../Elements/Tables/MostForAgainst";

// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// Elements
import FillPod from "../../../../Elements/pods/FillPods";


var _ = require('lodash');

let stats=[
    {
        Name:["Innings"],
        Value:[0],
        Total:[0],
        Percentage:[0], 
        For:["Name"],
        Against:["Name"],
        Title:"Career Innings"
    },
    {
        Name:["Runs"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Runs"
    },
    {
        Name:["Balls Faced"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Balls Faced"
    },
    {
        Name:["Not Out's"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],
        Against:["Name"],
        Title:"Career Not Out's"
    },
    { 
        Name:["Average"],
        Value:[0], 
        Total:[0],
        Percentage:[0],
        For:["Name"], 
        Against:["Name"],
        Title:"Career Average"
    }, 
    {
        Name:["Strike Rate"], 
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"],  
        Against:["Name"],
        Title:"Career Innings"
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
                                TitleValue:{$set:this.props.Data.innings}
                            },
                            1:{
                                Value:{$set:[Data.runs]},
                                Total:{$set:[Data.runs]},
                                Percentage:{$set:[this.findPercentage(Data.runs,Data.runs)]},
                                TitleValue:{$set:this.props.Data.runs }
                            },
                            2:{
                                Value:{$set:[Data.ballsFaced]},
                                Total:{$set:[Data.ballsFaced]},
                                Percentage:{$set:[this.findPercentage(Data.ballsFaced,Data.ballsFaced)]},
                                TitleValue:{$set:this.props.Data.ballsFaced}
                            },
                            3:{
                                Value:{$set:[Data.notOut]},
                                Total:{$set:[Data.notOut]},
                                Percentage:{$set:[this.findPercentage(Data.notOut,Data.notOut)]},
                                TitleValue:{$set:this.props.Data.notOut}
                            },
                            4:{
                                Value:{$set:[Data.average]},
                                Total:{$set:[Data.average]},
                                Percentage:{$set:[this.findPercentage(Data.average,Data.average)]},
                                TitleValue:{$set:this.props.Data.average}
                            },
                            5:{
                                Value:{$set:[Data.strikeRate]},
                                Total:{$set:[Data.strikeRate]},
                                Percentage:{$set:[this.findPercentage(Data.strikeRate,Data.strikeRate)]},
                                TitleValue:{$set:this.props.Data.strikeRate}
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
            <div>
            <Row className="PodRow Form_Selector"> 
                <Pod  className="flex-50" canvas="">
                    <FormControl variant="outlined" className="YearSelector" >
                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                            {this.props.TITLES.FORM.INPUTLABELS.YEARS}
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
                                    <MenuItem value="Career" >{this.props.TITLES.TITLES.CAREER}</MenuItem>
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
            <Row className="PodRow">
                    {
                        this.state.stats.map((radial,i)=>{
                            return( 
                                    <FillPod   
                                        key={i}
                                        Value={radial.Value}
                                        Label={radial.Name}
                                        Percentage={radial.Percentage}
                                        Created={this.state.Created}
                                        TitleValue={radial.TitleValue}
                                        Title ={radial.Title}
                                        className="flex-30 flex-m-100"
                                    />
                                )
                        })
                    } 
                </Row>
            </div>
            )
        }
    } 