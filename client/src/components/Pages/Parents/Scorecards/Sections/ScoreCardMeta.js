import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import SectionHeader from "../../../../Template/Global/Section_Global_Header";
import Row from "../../../../Template/Page/Row";
import  {Runs,Wickets,Keeping,Trophy } from "../../../../Icons/icons"; 
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";

let PATH;
export default class Home_Overview extends Component {
    componentWillMount() {} 
    FindWinner(ARR,VAL){
        console.log(parseFloat(VAL) , Math.max(...ARR))
        if(parseFloat(VAL)  === Math.max(...ARR)){
            return 'flex-50 Winner'
        }
        else{
            return 'flex-50 Loser'
        }
    }
    render() {
        PATH = this.props.SC.ScoreMeta;
        return (

            <Row className="PodRow ScoreCard_Scores">
                            <IconPod 
                                icon={<Runs/>}
                                label={PATH.Meta.first.Name} 
                                total={PATH.Meta.first.Runs +'/'+PATH.Meta.first.For}
                                Footer = {PATH.Meta.first.Overs + ' Overs'}
                                className={this.FindWinner([PATH.Meta.first.Runs, PATH.Meta.second.Runs],PATH.Meta.first.Runs )}
                            /> 

                            <IconPod 
                                icon={<Runs/>}
                                label={PATH.Meta.second.Name} 
                                total={PATH.Meta.second.Runs +'/'+PATH.Meta.second.For}
                                Footer = {PATH.Meta.second.Overs + ' Overs'}
                                className={this.FindWinner([PATH.Meta.first.Runs, PATH.Meta.second.Runs],PATH.Meta.second.Runs )}
                            /> 
                </Row>
           
            )
        }
    } 

