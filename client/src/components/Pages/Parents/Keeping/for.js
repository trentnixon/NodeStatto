import React, { Component } from 'react';

// Template
import Container from "../../../Template/Page/Containers/Container";
import SectionHeader from "../../../Template/Page/Structure/Structure_Page_Header_Main";
import SectionContainer from "../../../Template/Page/Structure/Structure_IsVisable_Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Structure/Pods/PodType/Pod_Basic";

// Icons
import PeopleIcon from '@material-ui/icons/People';
import PeopleIconOutline from '@material-ui/icons/PeopleOutline';

// UI 

import Tabber from "../../../Venders/MaterialUI/Tabber/TabContaner";
import DataTable from "../Batting/Sections/ForAgainst/Section_Table_ForAgainst";

// Form  
  // Select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
  // Radio

var _ = require('lodash');

let stats=[
  {
      Name:["CaughtBehind"],
      Title:"Caught Behind",
      eq:">",
      sv:"0"
  },
  {
      Name:["Stumpings"],
      Title:"Stumpings",
      eq:">",
      sv:"0"
  }
];

let PRIMARY;
export default class ForandAgainstMajorTable extends Component {

  state = {
    labelWidth: 100,
    Value:"Caught Behind",
    SelectedStat:"CaughtBehind",
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

//  handleRadioChange = event => {
//    this.setState({ RadioValue: event.target.value });
//  };

  componentWillMount() {
    PRIMARY = this.props.PLAYER_DATA.Primary; 
    let  AGAINST = _.orderBy(PRIMARY.FORAGAINST.Against, ["CaughtBehind"],['desc']);
    let  FOR = _.orderBy(PRIMARY.FORAGAINST.For, ["CaughtBehind"],['desc']);
    this.setState({ AGAINST: AGAINST,FOR:FOR })
  }

  render() { 
    
    const SITELABELS = this.props.LABELS.SITE;
    //const PRIMARY = this.props.PLAYER_DATA.Primary;

    return (
        <Container>
          <SectionHeader   h1={SITELABELS.SUBS.FORAGAINST} h2={SITELABELS.TITLES.BOWLING} /> 
            <SectionContainer className="Section_Batting_FORANDAGAINST_Form Selector">
                <Row className="PodRow Form_Selector">
                  <Pod>
                  <FormControl variant="outlined" className="YearSelector" >
                      <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-Select"> 
                          {SITELABELS.FORM.INPUTLABELS.FILTER}
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
                                              {... this.props}
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
                                              {... this.props}
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


/**
 *  <FormControl component="fieldset" className="RadioButtons">
                        <FormLabel component="legend">Num {this.props.SUBS.INNINGS}</FormLabel>
                          <RadioGroup
                            aria-label="Radio"
                            name="Radio"
                            value={this.state.RadioValue}
                            onChange={this.handleRadioChange}
                          >
                            <FormControlLabel value="0" control={<Radio color="primary" />} label="All" />
                            <FormControlLabel value="5" control={<Radio color="primary" />} label="<  10" />
                            <FormControlLabel value="10" control={<Radio color="primary" />} label=">  10" />
                        </RadioGroup>
                      </FormControl>
 */