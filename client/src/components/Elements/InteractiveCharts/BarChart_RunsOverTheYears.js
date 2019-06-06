import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Elements/pods/Pod_Outer_Wrapper";
//import Title from "../../Elements/type/PageTitle";
//import SubTitle from "../../Elements/type/PageSubTitle";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


import Bar from "../../Charts/BarChart";

let RunsYear=[
    { 
        name:"Runs",
        data:[]
    },
    { 
        name:"Balls",
        data:[]
    }
];
 
let Labels=[];

export default class Section_Rankings extends Component {
   
    state = {
        labelWidth: 100,
        year:0,
        Data:RunsYear,
        Labels:Labels,
        Created:0

      }
    
      componentDidMount() {}
    
      handleChange = event => {
        this.createBars(this.props.DATA.CLEAN,event.target.value)
      }


      createBars(data,year){
        RunsYear=[
            { 
                name:"Runs",
                data:[]
            },
            {
                name:"Balls",
                data:[]
            }
        ];
        Labels=[];
        
        // eslint-disable-next-line
        data.map((game,i)=>{
          //console.log(game)
            if(game.Batting){
                  let Date = game.Meta.Date.split("/");
                  if( year === "20"+Date[2])
                  {
                    RunsYear[0].data.push(game.Batting.RunInt)
                    RunsYear[1].data.push(game.Batting.BallsFacedInt)
                    Labels.push(game.Meta.Opposition)

                  }
            }
        })


        this.setState(
            { 
                    Year:year,
                    Data:RunsYear,
                    Labels:Labels,
                    Created: Math.round((new Date()).getTime() / 1000)
             }
    );

        return RunsYear;
      }

      
    componentWillMount() { 
        this.createBars(this.props.DATA.CLEAN,this.props.DATA.CAREER.Career.batting.overTheYears[0].int)
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    render() {
        return (
            <div> 
                <Row class="PodRow Form_Selector"> 
                    <Pod col="Selector" canvas="">
                        <FormControl variant="outlined" className="YearSelector" >
                            <InputLabel
                                ref={ref => { this.InputLabelRef = ref; }}
                                htmlFor="outlined-year-simple"
                            > 
                                {this.props.LABELS.SITE.FORM.INPUTLABELS.YEARS}
                            </InputLabel>
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
            )
        }
    } 