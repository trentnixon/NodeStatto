import React, { Component } from 'react';

import Row from "../../Template/Page/Row";
import Pod from "../../Template/Page/Pod";
import SectionHeader from "../../Sections/global/Section_Global_Header";
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
                    //    console.log(Year, game.Meta.TeamID,this.props.SelectedID)
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
        <div className="Section_History" >
             <SectionHeader h1="History " h2="Career" />
            <Row class="ContainerRow">
            
                <Pod col="col-md-12 Selector" type="Zeroed" >
                        <FormControl variant="outlined" className="YearSelector" >
                            <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                                Years 
                            </InputLabel>

                            <Select
                                value={this.state.Year}
                                onChange={this.handleChange}
                                input={ <OutlinedInput labelWidth={this.state.labelWidth} name="year" id="outlined-year-simple" /> }
                            >
                                <MenuItem value="Career" >Career</MenuItem>
                                    {
                                        this.props.Years.map((year,i)=>{
                                            return(
                                                <MenuItem key={i} value={year.int}>{year.int}</MenuItem>
                                            )
                                        })
                                    }
                            </Select>
                        </FormControl>
                </Pod>
            

                <div className="ContentContainer canvas1 col-12">
                    <div className="Body">
                        <List>
                            <ListHistory 
                                Games={this.state.List}
                                        isVisible={true}
                                        match={ this.props.Match}
                                    />
                        </List>
                    </div>
                </div>
                
        </Row>
    </div> 
    )
  }
} 