import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import Title from "../../Elements/type/PageTitle";
//import SubTitle from "../../Elements/type/PageSubTitle";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


import Bar from "../../Charts/BarChart";

let WicketsYears=[
    { 
        name:"Wickets",
        data:[]
    },
    {
        name:"Runs",
        data:[]
    }
];

let Labels=["Title"];


export default class Section_Rankings extends Component {
   
    state = {
        labelWidth: 100,
        year:0,
        Data:WicketsYears,
        Created:0,
        Labels:Labels

      }
    
      componentDidMount() {}
    
      handleChange = event => { this.createWickets(this.props.DATA.CLEAN,event.target.value); }

      createWickets(data,year){
        Labels=[];
        WicketsYears=[
            { name:"Wickets", data:[] },
            { name:"Runs",data:[] }
        ]

        // eslint-disable-next-line
        data.map((game,i)=>{

            if(game.Bowling){
                  let Date = game.Meta.Date.split("/");
                  if( year === "20"+Date[2])
                  {
                    WicketsYears[0].data.push(parseInt(game.Bowling.Wickets,10))  
                    WicketsYears[1].data.push(parseInt(game.Bowling.Runs,10))  
                    Labels.push(game.Meta.Opposition);
                  }
            }
        })

        this.setState(
            { 
                Year:year,
                Data:WicketsYears,
                Labels:Labels,
                Created: Math.round((new Date()).getTime() / 1000)
            }
    );

        return WicketsYears;
      }

    

    componentWillMount() {
      this.createWickets(this.props.DATA.CLEAN,this.props.DATA.CAREER.Career.bowling.overTheYears[0].int)  
    }
    render() {

        return (
            <Row class="PodRow">
                <Title Title="Wickets By Teams and Year" />
                    <div>
                    <Row class="PodRow Form_Selector"> 
                        <Pod col="Selector" canvas="">
                            <FormControl variant="outlined" className="YearSelector" >
                            <InputLabel
                                ref={ref => { this.InputLabelRef = ref; }}
                                htmlFor="outlined-year-simple"
                            > Select a Year </InputLabel>
                            <Select
                                value={this.state.Year}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                        labelWidth={this.state.labelWidth}
                                        name="year"
                                        id="outlined-year-simple"
                                    />
                                }
                            >

                            {
                                this.props.DATA.CAREER.Career.batting.overTheYears.map((year,i)=>{
                                        return(
                                            <MenuItem key={i} value={year.int}>{year.int}</MenuItem>
                                        )
                                })
                            }
                    
                            </Select>
                            </FormControl>
                        </Pod>
                    </Row>
                    
                    <Row class="PodRow">
                    <Pod canvas="canvas1">
                    

                    <Bar 
                        series={this.state.Data}
                        Labels={this.state.Labels}
                        Created={this.state.Created}
                        horizontal={true}
                    />
                        </Pod>
            </Row>
            </div>
            </Row>
            )
        }
    } 