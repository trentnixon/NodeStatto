import React, { Component } from 'react';
import {Animated} from "react-animated-css";
// Template
import Row from "../../../../../Template/Page/Row";
import ChartContainer from "../../../../../Template/Page/ChartContainer";
import IconPod from "../../../../../Elements/pods/Pod_SingleValue_Iconheader";

let TextSeries=[], PercNum=0;

export default class Section_Rankings extends Component {
         
    componentWillMount() {

        console.log(this.props.DATA);

      this.setState({ year: this.props.DATA.overTheYears[0].int});
        TextSeries=[]

        // eslint-disable-next-line
        this.props.DATA.overTheYears.map((h,i)=>{
                console.log(h)
                PercNum = (h.TotalBF/this.props.DATA.ballsFaced)*100;
                TextSeries.push({"Runs":h.TotalBF, "Year":h.int, "Perc":PercNum.toFixed(1) + '%'})
          })
    }
    render() { 

        let  IsVisable =  this.props.isVisible === true ? 'show':'';
        const icons= {
            "HasInfo":true,
            "Info":this.props.TITLE.DESC.TODO,
            "Interactive":false,
            "Filterable":false 
          }

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
                                label="Carrer Balls Faced"
                                total={this.props.DATA.ballsFaced}
                                Footer = ""
                            />
                        </Animated>


            <ChartContainer
                    DisplayIcons={icons}
                    Title="Balls Faced over the Years"
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