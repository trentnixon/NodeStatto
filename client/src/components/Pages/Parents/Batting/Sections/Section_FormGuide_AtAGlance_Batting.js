import React, { Component } from 'react';
import {Animated} from "react-animated-css";

import Row from "../../../../Template/Page/Row";
import SingleValuePod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";
import { BattingBasics } from "../../../../../actions/UI"

import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

let SentSeries,stats=[], CAREER;
export default class Section_Rankings extends Component {


     // Functions
    findPercentage(int,total){ 
        let Perc = (int/total)*100;
        if(Perc  > 100){ Perc = 100}
        return Perc;
    }
    Divideexpected(int,value,played){ 
        return ((value/int)*played).toFixed(2);
    }
    Multiplyexpected(value,played){
        return (value*played).toFixed(2);
    }
    SelectIcon(val1,val2){

        if(parseFloat(val1,10) < parseFloat(val2,10)){
            return <TrendingDownIcon  className="FormTrending Down"/>
        }
        else{
            return <TrendingUpIcon className="FormTrending Up" />
        }
    }
    componentWillMount() {
        SentSeries = BattingBasics(this.props.FORMDATA)
        CAREER = this.props.Career.batting;
        //console.log(this.props.Career);

        stats=[
            {
                Name:["Innings"],
                Value:SentSeries[0], 
                Total:SentSeries[0],
                Percentage:this.Divideexpected(CAREER.innings,this.props.Career.Meta.Games.int,SentSeries[0]),
                Title:"Expected"
            },
            {
                Name:["Runs"],
                Value:SentSeries[4],
                Total:SentSeries[4],
                Percentage:this.Multiplyexpected(CAREER.average,SentSeries[0]),
                Title:"Expected"
            },
            {
                Name:["Balls Faced"],
                Value:SentSeries[10],
                Total:SentSeries[10],
                Percentage:this.Divideexpected(CAREER.innings,CAREER.ballsFaced,SentSeries[0]),
                Title:"Expected"
            },
            {
                Name:["Not Out's"],
                Value:SentSeries[15],
                Total:SentSeries[15],
                Percentage:this.Divideexpected(CAREER.innings,CAREER.notOut,SentSeries[0]),
                Title:"Expected"
            },
            {
                Name:["Average"],
                Value:SentSeries[8], 
                Total:SentSeries[8], 
                Percentage:CAREER.average,
                Title:"Expected"
            },
            {
                Name:["Strike Rate"],
                Value:SentSeries[12],
                Total:SentSeries[12],  
                Percentage:CAREER.strikeRate,
                Title:"Expected"
            }
        ]
    }

    render() {
        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (
            <Row className="PodRow">
                
                            { 
                                stats.map((radial,i)=>{
                                    let Delay= 200*i;
                                    return(
                                        <Animated  
                                            key={i} 
                                            animationIn="fadeInUp"
                                            isVisible={this.props.isVisible}
                                            animationInDelay={Delay}
                                            animateOnMount={false}
                                            className={IsVisable + " flex-30 flex-m-50"}
                                        >
                                            <SingleValuePod 
                                                label={radial.Name}
                                                total={radial.Value}
                                                icon= {this.SelectIcon(radial.Value, radial.Percentage)}
                                                Footer = {radial.Title + ' ' +radial.Percentage}
                                            />
                                        </Animated> 
                                    )
                                })
                            }
                
             </Row>

            )
        }
    } 