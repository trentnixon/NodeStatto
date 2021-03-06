import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Template
import Row from "../../../../../Template/Page/Row";
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic"
import SectionP from "../../../../../Template/Page/Typography/PageParagraph";
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
        Name:"Twenties",
        Var:19,
        type:"runs",
        limit:10
    },
    {
        Name:"Thirties",
        Var:29,
        type:"runs",
        limit:10
    },
    {
        Name:"Forties",
        Var:39,
        type:"runs",
        limit:10
    },
    {
        Name:"Fifties",
        Var:49,
        type:"runs",
        limit:10
    },
    {
        Name:"60 and Above", 
        Var:55,
        type:"runs",
        limit:9999
    },
    {
        Name:"Ducks",
        Var:-1,
        type:"runs",
        limit:2
    }
]

export default class Section_Rankings extends Component { 
    state = {
        labelWidth: 100,
        YEAR:"Fifties",
        DisplayResults:this.FetchRuns(49, 999999)
      }
    
    FetchRuns(Var,Limit){
        let Results=[]
        // eslint-disable-next-line
        this.props.DATA.map((game,i)=>{
          
            if(game.Batting){
                //console.log(game.Batting.RunInt , Var, (Var+Limit))
              
                if(game.Batting.RunInt > Var && game.Batting.RunInt < (Var+Limit))
                {
                    //console.log(game.Batting.RunInt)
                    Results.push(game)
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
            case "runs":
                this.setState({
                    DisplayResults:this.FetchRuns(Scope.Var, Scope.limit),
                    YEAR:Scope.Name
                });
              break;
            case "SR":
              // code block
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
                                     
                                    />
                                }
                        >
                                {
                                    variables.map((variables,i)=>{
                                        return(
                                            <MenuItem key={i} value={i}>{variables.Name}</MenuItem>
                                        )
                                    })
                                }
                        </Select>
                    </FormControl>
                </Pod>
            </Row>  

            <Row className="PodRow">
                                <Pod canvas="canvas1" className="flex-100">  
                                 <SectionP copy={this.state.DisplayResults.length + ' '+ this.state.YEAR} /> 
                          
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
                                                <h1>Runs</h1>
                                            </div>
                                            <div className="GameBalls"> 
                                                <h1>Balls</h1>
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
                                                            <h1>{game.Batting.RunsValue}</h1>
                                                        </div>
                                                        <div className="GameBalls"> 
                                                            <h1>{game.Batting.BallsFaced}</h1>
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