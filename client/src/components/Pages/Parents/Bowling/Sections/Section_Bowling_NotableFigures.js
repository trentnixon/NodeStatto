import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import SectionP from "../../../../Template/Global/Section_Global_Paragraph";
// Form 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// Icons
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';

// VAriables
const variables=[
    {
        Name:"2 fa",
        Var:2,
        type:"wickets",
        limit:1
    },
    {
        Name:"3 fa",
        Var:3,
        type:"wickets",
        limit:1
    },
    {
        Name:"4 fa",
        Var:4,
        type:"wickets",
        limit:1
    },
    {
        Name:"5 +",
        Var:5,
        type:"wickets",
        limit:100
    },{
        Name:"Under 20 - 4 Overs",
        Var:20,
        type:"rc",
        limit:4
    },{
        Name:"Under 10 - 3 Overs",
        Var:10,
        type:"rc",
        limit:3
    }
]

export default class Section_Rankings extends Component { 
    state = {
        labelWidth: 100, 
        YEAR:"2 fa",
        DisplayResults:this.FetchRuns(2, 1, "wickets")
      }
    
    FetchRuns(Var,Limit,Type){
        let Results=[]
        // eslint-disable-next-line
        this.props.DATA.map((game,i)=>{
          
            if(game.Bowling){
               // console.log(parseInt(game.Bowling.Wickets,10) , Var, (Var+Limit), Type)
              
                if(Type === 'wickets'){
                    if(parseInt(game.Bowling.Wickets,10) === Var && parseInt(game.Bowling.Wickets,10) < (Var+Limit))
                    {
                        //console.log(parseInt(game.Bowling.Wickets,10))
                        Results.push(game)
                    }
                }
                else if(Type === 'rc'){
                    if(parseInt(game.Bowling.OversInt,10) === Limit && parseInt(game.Bowling.Runs,10) < Var)
                        {
                           // console.log(parseInt(game.Bowling.Wickets,10))
                            Results.push(game)
                        }
                }
               
            }
           
        })
        
        //console.log(Results);
        return Results
    }
    handleChange = event => {
        let Scope = variables[event.target.value];
        //console.log(Scope.Name);
        switch(Scope.type) {
            case "wickets":
                this.setState({
                    DisplayResults:this.FetchRuns(Scope.Var, Scope.limit, Scope.type),
                    YEAR:Scope.Name
                });
              break;
            case "rc":
                this.setState({
                    DisplayResults:this.FetchRuns(Scope.Var, Scope.limit, Scope.type),
                    YEAR:Scope.Name
                });
              break;
            default:
              // code block
          }
        //
    }
    

    componentWillMount() {}
    render() {
        return (
            <div>
                <Row className="PodRow Form_Selector flex-100"> 
                    <Pod  className="flex-50" canvas=""> 

                    <FormControl variant="outlined" className="YearSelector" >
                        <InputLabel ref={ref => { this.InputLabelRef = ref; }} htmlFor="outlined-year-simple"> 
                            {this.props.TITLE.FORM.INPUTLABELS.VARIABLE} 
                        </InputLabel>
                        <Select
                            value={this.state.YEAR} 
                            onChange={this.handleChange}
                            input={ <OutlinedInput 
                                        labelWidth={this.state.labelWidth}
                                        name="Year"
                                        id="outlined-year-simple" 
                                        value={this.state.YEAR} 
                                     
                                    />
                                }
                        >
                                {
                                    variables.map((variables,i)=>{
                                        return(
                                            <MenuItem key={i} value={i} >{variables.Name}</MenuItem>
                                        )
                                    })
                                }
                        </Select>
                    </FormControl>
                </Pod>
            </Row>  

            <Row className="PodRow">
                                <Pod canvas="canvas1" className="flex-100">  
                                 <SectionP copy={this.state.YEAR + ' ('+this.state.DisplayResults.length + ')'} /> 
                          
                                    <div className="ListItem Header">
                                            <div className="For">
                                                <h1>For</h1>
                                            </div>
                                            <div className="Against">
                                                <h1>Against</h1>
                                            </div>
                                            <div className="Date">
                                                <h1><small>Date</small></h1>
                                            </div>
                                            <div className="GameRuns"> 
                                                <h1>Figures</h1>
                                            </div>
                                            <div className="GameBalls"> 
                                                <h1>Overs</h1>
                                            </div> 
                                            <div className="GameCTA"> 
                                                
                                            </div> 
                                            
                                    </div>
                                    {
                                        this.state.DisplayResults.map((game,i)=>{
                                            //console.log(game)
                                                return(
                                                    <div className="ListItem" key={i}>
                                                        <div className="For">
                                                            <h1>{game.Meta.Team}</h1>
                                                        </div>
                                                        <div className="Against">
                                                            <h1>{game.Meta.Opposition}</h1>
                                                        </div>
                                                        <div className="Date">
                                                            <h1><small>{game.Meta.Date}</small></h1>
                                                        </div>
                            
                                                        
                                                        <div className="GameRuns">
                                                            <h1>{game.Bowling.Figures}</h1>
                                                        </div>
                                                        <div className="GameBalls"> 
                                                            <h1>{game.Bowling.Overs}</h1>
                                                        </div>
                                                        <div className="GameCTA"> 
                                                            <IconButton aria-label="Scorecard" component={Link} to={`/scorecard/${game.Meta.Fixture}`}>
                                                                <LaunchIcon />
                                                            </IconButton>
                                                        </div> 
                                                    </div>
                                                )
                                        })
                                    } 
                            </Pod>
                        </Row>
                        </div>
            
            )
        }
    }  