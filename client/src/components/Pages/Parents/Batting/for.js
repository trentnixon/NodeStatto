import React, { Component } from 'react';
import Title from "../../../Elements/type/PageTitle";
import Container from "../../../Template/Page/Container";
import Row from "../../../Template/Page/Row";
import Pod from "../../../Template/Page/Pod";
//import PageHeader from "../../../Template/Page/Header";

/** Table */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ROW from "../../../Elements/Tables/ROW_ForandAgainst";

// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';


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
    stats:stats, 
    Created:0,
    SelectedStat:"Innings",
    AGAINST:null,
    FOR:null
  }

  handleChange = event => {
  //  console.log(this.state.stats[event.target.value].Title);
    
    

   let  AGAINST = _.orderBy(this.state.AGAINST, [this.state.stats[event.target.value].Name[0]],['desc']);
   let  FOR = _.orderBy(this.state.FOR, [this.state.stats[event.target.value].Name[0]],['desc']);
  

   this.setState({ 
    Created: Math.round((new Date()).getTime() / 1000),
    Value:this.state.stats[event.target.value].Title,
    SelectedStat:this.state.stats[event.target.value].Name[0],
    AGAINST:AGAINST,
    FOR:FOR
  })
  }
  componentWillMount() {

    let  AGAINST = _.orderBy(this.props.DATA.AGAINST, ["Innings"],['desc']);
    let  FOR = _.orderBy(this.props.DATA.FOR, ["Innings"],['desc']);
   
    this.setState({ 
      AGAINST: AGAINST,
      FOR:FOR,
      Value:"Innings"
    })
  }

  render() { 
  
    return (
      <div>
        <Container>
         <Title Title={"Batting For and Against : " + this.state.Value}/>
          <Row>
              <Pod col="col-md-12">
                <Row class="ContainerRow Form_Selector">
                <Pod col="col-md-12 Selector" canvas="">
                    <FormControl variant="outlined" className="YearSelector" >
                        
                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                            Statistic 
                        </InputLabel>

                        <Select
                            value={this.state.Value}
                            onChange={this.handleChange}
                            input={ <OutlinedInput 
                                        labelWidth={this.state.labelWidth}
                                        name="year"
                                        id="outlined-year-simple"
                                    />
                                }
                        >
                        {
                          this.state.stats.map((stat,i)=>{
                              return(
                                <MenuItem key={i} value={i}>{stat.Title}</MenuItem>
                              )
                            })
                        }
                        </Select>
                    </FormControl>
                </Pod>
            </Row> 

                <div className="Table " id="ForandAgainst" >
                   <Table >
                        <TableHead>
                        <TableRow>
                            <TableCell align="right">For</TableCell>
                            <TableCell align="right">Against</TableCell>
                        </TableRow>
                        </TableHead>
                          <TableBody>
                            <TableRow >
                               <TableCell style={TableStyle}  align="right">
                                <Table>
                                  <TableBody>
                                             {
                                               // eslint-disable-next-line
                                             this.state.FOR.map((team,i)=>{
                                                if(team[this.state.SelectedStat] !== 0){
                                                  return( 
                                                    <ROW 
                                                      key={i} 
                                                      Team={team.Team} 
                                                      Value= {team[this.state.SelectedStat]}
                                                    />
                                                  )
                                                }
                                             })
                                             }
                                    </TableBody>
                                </Table>
                              </TableCell>
                              
                              <TableCell style={TableStyle} align="right">
                                <Table>
                                  <TableBody>
                                        {
                                          // eslint-disable-next-line
                                             this.state.AGAINST.map((team,i)=>{
                                             // console.log(team);
                                             if(team[this.state.SelectedStat] !== 0){
                                                return( 
                                                  <ROW 
                                                    key={i} 
                                                    Team={team.Team} 
                                                    Value= {team[this.state.SelectedStat]}
                                                  />
                                                )
                                             }
                                             })
                                        }
                                    </TableBody>
                                </Table> 
                                </TableCell>
                            </TableRow>
                                  
                        </TableBody>
                    </Table>
                </div>
              </Pod>
          </Row>
        </Container>
      </div>
    )
  }
}