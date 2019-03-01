import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import SubTitle from "../../Elements/type/PageSubTitle";
// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import ListHistory from "../../Elements/Lists/List_History"
import List from '@material-ui/core/List';

var _ = require('lodash');

let DisplayList, Data, OvertheYears;
export default class History extends Component {

    state = {
        labelWidth: 100,
        Year:"Career",
        Created:0,
        List:[]
      }

      handleChange = event => {
        this.createList(this.props.DATA.CLEAN,event.target.value)
      }
    
      createList(arr , Year)
        
      {
          let CreateNewList=[]
          let NewYear;
            arr.map((game,i)=>{
                  //  console.log(Year, game)
                    if(Year === "Career"){
                        CreateNewList.push(game);   
                    }
                    else{
                        NewYear = game.Meta.Date.split("/")
                        if(Year == '20'+NewYear[2]){
                            CreateNewList.push(game);  
                        }
                    }
            })

            CreateNewList = _.orderBy(CreateNewList,['Meta.FixtureInt'],['desc'])
       
            this.setState({ 
                Created: Math.round((new Date()).getTime() / 1000),
                Year:Year,
                List:CreateNewList
            })

      }
  componentWillMount() { 
       this.createList(this.props.DATA.CLEAN, "Career")
        Data = this.props.DATA.CLEAN;

        OvertheYears = this.props.DATA.CAREER.Career.batting.overTheYears
    }

  render() { 

    return (
        <div className="Section_History" > 
        <Row class="ContainerRow">
            
            <Pod col="col-md-12 Selector" >
                        <FormControl variant="outlined" className="YearSelector" >
                            
                            <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                                Select a Year 
                            </InputLabel>

                            <Select
                                value={this.state.Year}
                                onChange={this.handleChange}
                                input={ <OutlinedInput labelWidth={this.state.labelWidth} name="year" id="outlined-year-simple" /> }
                            >
                                <MenuItem value="Career" >Career</MenuItem>
                                    {
                                        OvertheYears.map((year,i)=>{
                                            return(
                                                <MenuItem key={i} value={year.int}>{year.int}</MenuItem>
                                            )
                                        })
                                    }
                            </Select>
                        </FormControl>
                    </Pod>
            
            <Pod col="col-md-12" >
                    <Row>
                        
                        
                    <Pod col="col-md-12" canvas="invert"> 
                        <div className="ChartContainer">
                           
                            <div className="Body">
                            <List >
                                <ListHistory 
                                    Games={this.state.List}
                                    isVisible={true}
                                    match={ this.props.match}
                                />
                            </List>
                            </div>
                        </div>
                        </Pod>




                    </Row>
            </Pod>
        </Row>
    </div> 
    )
  }
} 