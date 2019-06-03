import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
//import Pod from "../../Template/Page/Pod";
import PodWrapper from "../../Elements/pods/Pod_Outer_Wrapper";

// import SubTitle from "../../Elements/type/PageSubTitle";
// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import ListHistory from "../../Elements/Lists/List_History"
import List from '@material-ui/core/List';

var _ = require('lodash');

export default class Section_HistoryList extends Component { 

    state = {
            labelWidth: 100, 
            Year:"Career",
            Created:0,
            List:[]
      }

      handleChange = event => {
        this.createList(this.props.List,event.target.value,this.props.SelectedID)
      }
    
      createList(arr , Year, SelectedTeam)  
        {
            let CreateNewList=[]
            let NewYear;
            // eslint-disable-next-line
                arr.map((game,i)=>{
                    //console.log(Year, game.Meta.TeamID,this.props.SelectedID)
                    if(
                        game.Meta.TeamID === this.props.SelectedID || 
                        this.props.SelectedID=== null
                        )
                    {
                        if(Year === "Career"){
                            CreateNewList.push(game);   
                        }
                        else{
                            NewYear = game.Meta.Date.split("/")
                            if(Year === '20'+NewYear[2]){
                                CreateNewList.push(game);  
                            }
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
        this.createList(this.props.List, "Career", this.props.SelectedID)
    }

  render() {     
    return (
        <div>
            <Row class="PodRow Form_Selector">
                <PodWrapper col="Selector" type="Zeroed" >
                    <FormControl variant="outlined" className="YearSelector" >
                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                            {this.props.LABELS.SITE.FORM.INPUTLABELS.YEARS} 
                        </InputLabel>
                        <Select
                            value={this.state.Year}
                            onChange={this.handleChange}
                            input={ <OutlinedInput labelWidth={this.state.labelWidth} name="year" id="outlined-year-simple" /> }
                        >
                            <MenuItem value="Career" >{this.props.TITLES.CAREER}</MenuItem>
                                {
                                    this.props.Years.map((year,i)=>{
                                        return(
                            <MenuItem key={i} value={year.int}>{year.int}</MenuItem>
                                        )
                                    })
                                }
                        </Select>
                    </FormControl>
                </PodWrapper>
            </Row>
            <Row class="PodRow">
                <PodWrapper canvas="canvas1">
                    <ListHistory 
                        Games={this.state.List}
                        isVisible={true}
                        match={ this.props.Match}
                    />
                </PodWrapper>
            </Row>
        </div>
    )
  }
} 


/**
 *  COMPONENT NOTES
 *  
 *  Complete move to Titles and Labels
 *  
 * 
 */