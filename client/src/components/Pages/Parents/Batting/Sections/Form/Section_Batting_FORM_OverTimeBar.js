import React, { Component } from 'react';

import { FormoverTime } from "../../../../../../actions/UI/UI"
// Template
import Row from '../../../../../Template/Page/Row';
import Pod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Basic"
import ChartContainer from "../../../../../Template/Page/Containers/ChartContainer";

// Charts
import Bar from "../../../../../Venders/ApexCharts/BarChart_Positive_Negitive";

let PrintFormFactor,FormYears=[],Labels;
export default class Section_Batting_BallsFaced extends Component {


    componentWillMount() {
        //console.log(this.props.CAREER.CLEAN, this.props.CAREER, this.props.UX.FORMS.SELECT.YEAR);
        PrintFormFactor = FormoverTime(this.props.CAREER.CLEAN, this.props.CAREER.CAREER, this.props.UX.FORMS.SELECT.YEAR)
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR)
        { PrintFormFactor = FormoverTime(this.props.CAREER.CLEAN, this.props.CAREER.CAREER, nextProps.UX.FORMS.SELECT.YEAR) }
    } 
    render() {
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLES.DESC.TODO, 
            "Interactive":true,
            "Filterable":true 
          }
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
           
                <ChartContainer 
                    DisplayIcons={icons}
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