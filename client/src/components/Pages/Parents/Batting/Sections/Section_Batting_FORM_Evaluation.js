import React, { Component } from 'react';
import { FormFactor } from "../../../../../actions/UI"
// Template
import Row from '../../../../Template/Page/Row';
import ChartContainer from "../../../../Template/Page/ChartContainer";
import FormRadial from "../../../../Charts/FormRadialChart";
let PrintFormFactor;

let Perc=0, Label='',Color='';
export default class Section_Batting_BallsFaced extends Component {
    componentWillMount() {
            PrintFormFactor =FormFactor(this.props.FORMDATA, this.props.CAREER.Career);
            Perc = (PrintFormFactor[0]*100)/2;

            /**
             *  $TrendingDown:#ce7070;
                $TrendingUp:#70ce90;
                $TrendingFlat:#cec570;
             */
            switch(true) {
                case Perc < 20:
                    Label='Awful'
                    Color ='#ce7070'
                  break;
                case Perc >= 20 && Perc < 30:
                    Label ='Poor'
                    Color ='#ce7070'
                  break;
                case Perc >= 30 && Perc < 45:
                    Label='Slightly Out'
                    Color ='#cec570'
                  break;
                case Perc >= 45 && Perc < 70:
                        Label='In Form'
                        Color ='#cec570'
                      break;
                case Perc >= 70 && Perc < 90:
                        Label='Great'
                        Color ='#70ce90'
                    break;
                case Perc >= 90 && Perc < 100:
                        Label='Exceptional'
                        Color ='#70ce90'
                        break;
                case Perc >= 100:
                    Label= 'Form of Your Life'
                    Color ='#70ce90'
                  break;
                default:
                  // code block
              }
        }
    render() {
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLES.DESC.FORMBATTINGRADIAL,
            "Interactive":false,
            "Filterable":false 
          }
        return ( 
            <Row className="PodRow"> 
                <ChartContainer 
                    DisplayIcons={icons}
                    Title=""
                    flex=" flex-100"
                >
                    <FormRadial 
                        series={[Perc]} 
                        Labels={[Label]} 
                        DisplayColor={Color}
                    />
                </ChartContainer> 
            </Row>            
            )
        }
    }