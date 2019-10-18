import React, { Component } from 'react';

import { FormoverTime, FindDataSeries } from "../../../../../actions/UI"
// Template
import Row from '../../../../Template/Page/Row';
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper"
import ChartContainer from "../../../../Template/Page/ChartContainer";
// FOrm
import SELECTYEAR from "../../../../Elements/FormElements/FormSelect/SelectYear";
// Charts
import Bar from "../../../../Charts/BarChart_Positive_Negitive";

let PrintFormFactor,FormYears=[],Labels;
export default class Section_Batting_BallsFaced extends Component {


    componentWillMount() {
        console.log(this.props.CAREER.CLEAN, this.props.CAREER.CAREER.Career, this.props.UX.FORMS.SELECT.YEAR);
        PrintFormFactor = FormoverTime(this.props.CAREER.CLEAN, this.props.CAREER.CAREER.Career, this.props.UX.FORMS.SELECT.YEAR)
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR)
        { PrintFormFactor = FormoverTime(this.props.CAREER.CLEAN, this.props.CAREER.CAREER.Career, nextProps.UX.FORMS.SELECT.YEAR) }
    } 
    render() {

        Labels=PrintFormFactor[1]

        FormYears=[
            {
                name:"Form Points",
                data:PrintFormFactor[0],
                type: 'column',
            }
        ];
        return ( 
            <Row className="PodRow"> 
                <SELECTYEAR TITLE={this.props.LABELS.SITE} {... this.props} />
                <ChartContainer 
                    Info={this.props.TITLES.DESC.FORMBATTINGOVERTIME} 
                    Interactive={true}
                    Title={"Form History"} 
                    flex=" flex-100"
                >
                      <Pod className="flex-100" canvas="canvas1">
                        <Bar series={FormYears} Labels={Labels}  BasePath='/batting/deep'/>
                     </Pod>
                </ChartContainer>
            </Row>            
            )
        }
    } 