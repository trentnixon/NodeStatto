import React, { Component } from 'react';
import {Animated} from "react-animated-css";
// Template
import Row from "../../../../Template/Page/Row";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import IconPod from "../../../../Elements/pods/Pod_SingleValue_Iconheader";

let TextSeries=[], PercNum=0;

export default class Section_Rankings extends Component {
         
    componentWillMount() {

      this.setState({ year: this.props.DATA.overTheYears[0].int});
        TextSeries=[]

        // eslint-disable-next-line
        this.props.DATA.overTheYears.map((h,i)=>{
                PercNum = (h.TotalRuns/this.props.DATA.runs)*100;
                TextSeries.push({"Runs":h.TotalRuns, "Year":h.int, "Perc":PercNum.toFixed(1) + '%'})
          })
    }
    render() {

        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        return (  
            <Row className="PodRow">

                    <Animated 
                            animationIn="fadeInUp" 
                            isVisible={this.props.isVisible}
                            animationInDelay={0}
                            animateOnMount={true}
                            className={IsVisable + " flex-100"}
                        >
                            <IconPod 
                                className="flex-100"
                                icon=""
                                label="Carrer Runs"
                                total={this.props.DATA.runs}
                                Footer = ""
                            />
                        </Animated>

            <ChartContainer
                    Info={this.props.TITLE.DESC.TODO}
                    Interactive=""
                    Title="Runs over the Years"
                    flex=" flex-100"
                >
            </ChartContainer>
                {
                    TextSeries.map((text,i)=>{
                        let Delay= 200*i;
                        return(

                            <Animated   
                            key={i} 
                            animationIn="fadeInUp" 
                            isVisible={this.props.isVisible}
                            animationInDelay={Delay}
                            animateOnMount={true}
                            className={IsVisable + " flex-30"}
                        >
                            <IconPod 
                                className="flex-100"
                                icon=""
                                label={text.Year}
                                total={text.Runs}
                                Footer = {text.Perc + " of Career"}
                            />
                        </Animated>
                        )
                    })
                }
            </Row>
            )
        }
    } 