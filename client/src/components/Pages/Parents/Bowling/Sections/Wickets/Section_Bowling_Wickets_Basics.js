import React, { Component } from 'react';
import {Animated} from "react-animated-css";
// Template
import Row from "../../../../../Template/Page/Row";
import ChartContainer from "../../../../../Template/Page/Containers/ChartContainer";
import IconPod from "../../../../../Template/Page/Structure/Pods/PodType/Pod_Header_SingleValue_Footer";

let TextSeries=[], PercNum=0;

export default class Section_Rankings extends Component {
         
    componentWillMount() {
      this.setState({ year: this.props.DATA.overTheYears[0].int});
        TextSeries=[]
        // eslint-disable-next-line
        this.props.DATA.overTheYears.map((h,i)=>{
                PercNum = (h.TotalWickets/this.props.DATA.wickets)*100;
                TextSeries.push({"Runs":h.TotalWickets, "Year":h.int, "Perc":PercNum.toFixed(1) + '%'})
          })
    }
    render() {
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLE.DESC.TODO,
            "Interactive":false,
            "Filterable":false 
          }
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
                                label="Carrer Wickets"
                                total={this.props.DATA.wickets}
                                Footer = ""
                            />
                        </Animated>

            <ChartContainer
                    Title="Wickets over the Years"
                    flex=" flex-100"
                    DisplayIcons={icons}
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