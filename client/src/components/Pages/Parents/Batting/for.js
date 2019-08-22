import React, { Component } from 'react';

// Template
import Container from "../../../Template/Page/Container";
import SectionHeader from "../../../Template/Global/Section_Global_Header";
import SectionContainer from "../../../Template/Global/SectionContainer";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Elements/pods/Pod_Outer_Wrapper";
import DataTable from "./Sections/Section_Table_ForAgainst";
//import PageHeader from "../../../Template/Page/Header";

// Icons
import PeopleIcon from '@material-ui/icons/People';
import PeopleIconOutline from '@material-ui/icons/PeopleOutline';

// UI 

//import SectionContainer from "../../../Template/Global/SectionContainer";
import Tabber from "../../../Template/Tabber/TabContaner";

// Form  
// Select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

var _ = require('lodash');


const stats=[
  {
      Name:["Innings"],
      Title:"Innings"
  },
  {
      Name:["Runs"],
      Title:"Runs"
  },
  {
      Name:["BF"],
      Title:"Balls Faced"
  },
  {
      Name:["NO"],
      Title:"Not Out's"
  },{
      Name:["AVG"],
      Title:"Average"
  },
  {
      Name:["SR"],
      Title:"Strike Rate"
  } 
];


let PRIMARY,TITLES;
export default class Page_ForandAgainstMajorTable extends Component {

  state = {
    labelWidth: 100,
    Value:"Innings",
    SelectedStat:"Innings",
    RadioValue:"0",
    stats:stats, 
    Created:0,
    AGAINST:null,
    FOR:null
  }

  handleChange = (event, index, value) => {

    let Int = index.key;
    let  AGAINST = _.orderBy(this.state.AGAINST, [this.state.stats[Int].Name[0]],['desc']);
    let  FOR = _.orderBy(this.state.FOR, [this.state.stats[Int].Name[0]],['desc']);
  
    this.setState({ 
        Created: Math.round((new Date()).getTime() / 1000),
        Value:this.state.stats[Int].Title,
        SelectedStat:this.state.stats[Int].Name[0],
        AGAINST:AGAINST,
        FOR:FOR
    })
  }

  handleRadioChange = event => {
    this.setState({ RadioValue: event.target.value });
  };
  componentWillMount() { 
    
    TITLES = this.props.LABELS 
    PRIMARY = this.props.PLAYER_DATA.Primary; 

    let  AGAINST = _.orderBy(PRIMARY.AGAINST, ["Innings"],['desc']);
    let  FOR = _.orderBy(PRIMARY.FOR, ["Innings"],['desc']);
    this.setState({ AGAINST: AGAINST,FOR:FOR })
  }

  render() { 
    
    return (
        <Container>
          <SectionHeader   h1={TITLES.SITE.SUBS.FORAGAINST} h2={TITLES.SITE.TITLES.BATTING} /> 
            <SectionContainer className="Section_Batting_FORANDAGAINST_Form Selector">
                <Row className="PodRow Form_Selector">
                  <Pod>
                  <FormControl variant="outlined" className="YearSelector" >
                      <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-Select"> 
                          {TITLES.SITE.FORM.INPUTLABELS.FILTER}
                      </InputLabel>
                      <Select
                            value={this.state.Value}
                            onChange={this.handleChange}
                            input={ <OutlinedInput 
                                        labelWidth={this.state.labelWidth}
                                        name={this.state.Value}
                                        id="outlined-Select"
                                    />
                                }
                        >
                          {
                            this.state.stats.map((stat,i)=>{
                                return(
                                  <MenuItem key={i} id={i} value={stat.Title}>{stat.Title}</MenuItem>
                                )
                              })
                          }
                        </Select>
                    </FormControl>
                  </Pod>
                </Row>
          </SectionContainer>
          <SectionContainer className="Section_Batting_FORANDAGAINST_Results" >
              <Tabber 
                        Tabs={
                          [
                            {
                              Title:"For",
                              Component:<DataTable 
                                              Type="For"
                                              Path="for" 
                                              Data={this.state.FOR}
                                              Selected={this.state.SelectedStat}
                                              Int={this.state.RadioValue}
                                              Label={this.state.Value}
                                          />,
                              Icon:<PeopleIcon />
                            },
                            {
                              Title:"Against",
                              Component:<DataTable 
                                              Type="Against"
                                              Path="against"
                                              Data={this.state.AGAINST}
                                              Selected={this.state.SelectedStat}
                                              Int={this.state.RadioValue}
                                              Label={this.state.Value}
                                          />,
                              Icon:<PeopleIconOutline />
                            }
                        ]}
              /> 
        
          </SectionContainer>
        </Container>
    )
  }
}