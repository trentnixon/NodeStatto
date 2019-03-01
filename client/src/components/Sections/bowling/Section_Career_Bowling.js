import React, { Component } from 'react';
import update from 'react-addons-update'

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
//import Title from "../../../Elements/type/PageTitle";
//import SubTitle from "../../../Elements/type/PageSubTitle";
 
// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// Elements
import FillPods from "../../Elements/pods/FillPods";

var _ = require('lodash');

let stats=[
    {
        Name:["Wickets"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Career Wickets"
    },
    {
        Name:["Overs Bowled"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Career Overs Bowled"
    },
    {
        Name:["Runs Conceeded"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        Title:"Career Runs Conceeded"
    },
    {
        Name:["Economy"],
        Value:[0], 
        Total:[0],
        Percentage:[0],

        Title:"Career Economy"
    },
    {
        Name:["Average"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"], 

        Title:"Career Average"
    },
    {
        Name:["Strike Rate"],
        Value:[0],
        Total:[0],
        Percentage:[0],
        For:["Name"], 

        Title:"Career Strike Rate"
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
                            Value:{$set:[Data.wickets]},
                            Total:{$set:[Data.wickets]},
                            Percentage:{$set:[this.findPercentage(Data.wickets,Data.wickets)]},
                            TitleValue:{$set:this.props.Data.wickets }
                        },
                        1:{
                            Value:{$set:[Data.ob]},
                            Total:{$set:[Data.ob]},
                            Percentage:{$set:[this.findPercentage(Data.ob,Data.ob)]},
                            TitleValue:{$set:this.props.Data.ob}
                        },
                        2:{
                            Value:{$set:[Data.rc]},
                            Total:{$set:[Data.rc]},
                            Percentage:{$set:[this.findPercentage(Data.rc,Data.rc)]},
                            TitleValue:{$set:this.props.Data.rc}
                        },
                        3:{
                            Value:{$set:[Data.economy]},
                            Total:{$set:[Data.economy]},
                            Percentage:{$set:[this.findPercentage(Data.economy,Data.economy)]},
                            TitleValue:{$set:this.props.Data.economy}
                        },
                        4:{
                            Value:{$set:[Data.average]},
                            Total:{$set:[Data.average]},
                            Percentage:{$set:[this.findPercentage(Data.average,Data.average)]},
                            TitleValue:{$set:this.props.Data.average}
                        },
                        5:{
                            Value:{$set:[Data.sr]},
                            Total:{$set:[Data.sr]},
                            Percentage:{$set:[this.findPercentage(Data.sr,Data.sr)]},
                            TitleValue:{$set:this.props.Data.sr}
                        },
                        
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
                            Value:{$set:[Path.TotalWickets]},
                            Total:{$set:[Data.wickets]},
                            Percentage:{$set:[this.findPercentage(Path.TotalWickets,Data.wickets)]}
                        },
                        1:{
                            Value:{$set:[Path.TotalOB]},
                            Total:{$set:[Data.ob]},
                            Percentage:{$set:[this.findPercentage(Path.TotalOB,Data.ob)]}
                        },
                        2:{
                            Value:{$set:[Path.TotalRC]},
                            Total:{$set:[Data.rc]},
                            Percentage:{$set:[this.findPercentage(Path.TotalRC,Data.rc)]}
                        },
                        3:{
                            Value:{$set:[(Path.TotalRC/Path.TotalOB)]},
                            Total:{$set:[Data.economy]},
                            Percentage:{$set:[this.findPercentage((Path.TotalRC/Path.TotalOB),Data.economy)]}
                        },
                        4:{
                            Value:{$set:[(Path.TotalRC/Path.TotalWickets).toFixed(2)]},
                            Total:{$set:[Data.average]},
                            Percentage:{$set:[this.findPercentage((Path.TotalRC/Path.TotalWickets),Data.average)]}
                        },
                        5:{
                            Value:{$set:[((Path.TotalOB*5)/Path.TotalWickets)]},
                            Total:{$set:[Data.sr]},
                            Percentage:{$set:[this.findPercentage((Path.TotalOB/Path.TotalWickets),Data.sr)]}
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

    render() {
        return (
            <div className="atAGlance">
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

                <Row>
                    <Pod col="col-md-12 NakedPod" >
                        <Row class="Radial" > 
                            {
                                this.state.stats.map((radial,i)=>{
                                    console.log(radial)
                                    return(
                                        <FillPods 
                                            key={i}
                                            Value={radial.Value}
                                            Label={radial.Name}
                                            Percentage={radial.Percentage}
                                            Created={this.state.Created}
                                            TitleValue={radial.TitleValue}
                                            Title ={radial.Title}
                                        />
                                    )
                                })
                            }
                        </Row > 
                    </Pod>
                </Row>
                </div>
            )
        }
    } 