import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";
import  {Runs,Trophy } from "../../../../Icons/icons"; 

let stones=[]. LABELS=null, RUNS=[],BALLS=[], DUCK=[],Fif=[], NO=[];
export default class Home_Overview extends Component {

    getRuns(Data){
        RUNS=[];
        BALLS=[];
        DUCK=[];
        Fif=[];
        NO=[];
        Data.map((game,i)=>{
           // console.log(game)
            if(game.Batting){ 
                RUNS.push(game.Batting.RunInt)
                BALLS.push(game.Batting.BallsFacedInt)
                if(game.Batting.RunInt === 0 && game.Batting.NotOut === 0){DUCK.push(1)}
                if(game.Batting.RunInt > 49 ){Fif.push(1)}
                if(game.Batting.NotOut === 1){ NO.push(1)}
            }
        }) 
       // console.log(RUNS,BALLS);
        // 
        return [
            RUNS.reduce((a, b) => a + b, 0), 
            (RUNS.reduce((a, b) => a + b, 0)/ (Data.length - NO.length)).toFixed(2),
            Math.max(... RUNS),
            BALLS.reduce((a, b) => a + b, 0),
            (RUNS.reduce((a, b) => a + b, 0)/BALLS.reduce((a, b) => a + b, 0)*100).toFixed(2),
            Fif.length,
            DUCK.length,
            NO.length
        ];
    }
    
    componentWillMount() { 
        
       let LABELS = this.props.TITLES.SITE;
       let FetchStats = this.getRuns(this.props.Data);
       // console.log(this.props.Data, this.props.TITLES);
        
        stones=[
            { var:this.props.Data.length,        label:LABELS.TITLES.GAMES,icon:<Trophy/>},
            { var:FetchStats[0], label:LABELS.SUBS.RUNS,icon:<Runs/>},
            { var:FetchStats[2],  label:LABELS.SUBS.HS,icon:<Runs/>},
            
            { var:FetchStats[1], label:LABELS.SUBS.AVG, icon:<Runs/>},
            { var:FetchStats[3],  label:LABELS.SUBS.BF,icon:<Runs/>},
            { var:FetchStats[4],  label:LABELS.SUBS.SR,icon:<Runs/>},
            
            { var:FetchStats[5],  label:LABELS.SUBS.FIFTY,icon:<Runs/>},
            { var:FetchStats[6],  label:LABELS.SUBS.DUCKS,icon:<Runs/>},
            { var:FetchStats[7],  label:LABELS.SUBS.NO,icon:<Runs/>},
        ]
 
     } 
    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (
                <Row className="PodRow">
                   { 
                    stones.map((stone,i)=>{
                        let Delay= 200*i;
                    return(  
                        <Animated   
                            key={i} 
                            animationIn="fadeInUp"
                            isVisible={this.props.isVisible}
                            animationInDelay={Delay}
                            animateOnMount={false}
                         
                            className={IsVisable + " flex-30"}
                        >
                            <IconPod 
                                icon={stone.icon}
                                label={stone.label}
                                total={stone.var}
                                Footer = ""
                            /> 
                        </Animated>
                        )
                    }) 
                    }
                </Row>
       
            )
        }
    } 