import React, { Component } from 'react';
// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import ChartContainer from "../../../../Template/Page/ChartContainer";

// Sections
import InteractiveChart from "../../../../Charts/MixedChart";

// Actions
import { BattingBasics } from "../../../../../actions/UI";
// Variables
let Series=[];
export default class Home_Overview extends Component {

    createSeries(DATA){
        let FetchStats = BattingBasics(DATA);

        Series = [{
            name: 'Runs',
            type: 'column',
            data: FetchStats[3]
          }, {
            name: 'Average',
            type: 'area',
            data: FetchStats[7]
          }, {
            name: 'Strike Rate',
            type: 'area',
            data: FetchStats[11]
          }
        ]; 

        this.setState({ Series:Series, Labels:FetchStats[1] })
    }
     
    componentWillMount() {  this.createSeries(this.props.Data) } 
    render() {
      const icons= {
        "HasInfo":true,
        "Info":"FIX",
        "Interactive":true,
        "Filterable":false 
      }
        return (
            <Row className="PodRow">
              <ChartContainer
                        DisplayIcons={icons}
                        Title="Runs - Average - Strike Rate"
                        flex=" flex-100"
                    >
                    <Pod canvas="canvas1 " className="flex-100">
                        <InteractiveChart 
                            Labels={this.state.Labels}
                            series={this.state.Series} 
                        />
                    </Pod>
                    </ChartContainer>
            </Row>
       
            )
        }
    } 