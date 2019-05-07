import React, { Component } from 'react';


// Template
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
import DataTable from "../../../Sections/batting/Section_Table_ForAgainst";
//import PageHeader from "../../../Template/Page/Header";

// Icons
import PeopleIcon from '@material-ui/icons/People';
import PeopleIconOutline from '@material-ui/icons/PeopleOutline';

import {Batting} from "../../../Icons/icons";

// UI 
import SectionHeader from "../../../Sections/global/Section_Global_Header";
import SectionContainer from "../../../Sections/global/SectionContainer";
import Tabber from "../../../Template/Tabber/TabContaner";

// Form 
  // Select
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
  // Radio
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

var _ = require('lodash');

const TableStyle = {
  verticalAlign: 'top'
};

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

// let AGAINST;
export default class ForandAgainstMajorTable
 extends Component {

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
    let  AGAINST = _.orderBy(this.props.DATA.AGAINST, ["Innings"],['desc']);
    let  FOR = _.orderBy(this.props.DATA.FOR, ["Innings"],['desc']);
    this.setState({ AGAINST: AGAINST,FOR:FOR })
  }

  render() { 
    return (
      <div>
        <Container>
          <SectionHeader  h1="For and Against" h2="Batting"  /> 
            <Row>
              <Pod col="col-md-12" canvas="canvas1">
                <Row class="ContainerRow Form_Selector">
                  
                  <Pod col="col-md-6 Selector" canvas="">
                    <FormControl variant="outlined" className="GlobalSelect" >
                      <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-Select"> 
                            Filter By:  
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

                    <Pod col="col-md-6 Selector" canvas="">
                      <FormControl component="fieldset" className="RadioButtons">
                        <FormLabel component="legend"># Innings</FormLabel>
                          <RadioGroup
                            aria-label="Radio"
                            name="Radio"
                            value={this.state.RadioValue}
                            onChange={this.handleRadioChange}
                          >
                            <FormControlLabel value="0" control={<Radio color="primary" />} label="All" />
                            <FormControlLabel value="5" control={<Radio color="primary" />} label=">  5" />
                            <FormControlLabel value="10" control={<Radio color="primary" />} label=">  10" />
                            <FormControlLabel value="20" control={<Radio color="primary" />} label=">  20" />
                            <FormControlLabel value="50" control={<Radio color="primary" />} label=">  50" />
                        </RadioGroup>
                      </FormControl>
                    </Pod>
                  </Row> 
              </Pod>
            </Row>

            <SectionContainer>
                    <Tabber 
                        Tabs={
                          [
                            {
                              Title:"For",
                              Component:<DataTable 
                                              Type="For"
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
      </div>
    )
  }
}