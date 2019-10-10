import React, { Component } from 'react';
import { FormFactor } from "../../../../../actions/UI"
// Template
import Row from '../../../../Template/Page/Row';
import ChartContainer from "../../../../Template/Page/ChartContainer";
let PrintFormFactor;

export default class Section_Batting_BallsFaced extends Component {
    componentWillMount() {
            PrintFormFactor =FormFactor(this.props.FORMDATA, this.props.CAREER.Career);
        }
    render() {
        return ( 
            <Row className="PodRow"> 
                <ChartContainer 
                    Info={this.props.TITLES.DESC.TODO}
                    Interactive={false}
                    Title={"Form Evaluation" + PrintFormFactor[3]}
                    flex=" flex-100"
                >
                </ChartContainer>
            </Row>            
            )
        }
    } 


    /**
     *   <ul>
                        <li>Multiplier = {PrintFormFactor[0]}</li>
                        <li>Career = {PrintFormFactor[1]}</li>
                        <li>Form  = {PrintFormFactor[2]}</li>
                        <li>Difference = </li>
                    </ul>
     */