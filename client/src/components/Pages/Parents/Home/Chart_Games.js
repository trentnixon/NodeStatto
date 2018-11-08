import React, { Component } from "react";

import Pod from "../../../Template/Page/Pod";
import BasicChart from "../../../../components/Charts/Statto_Chart_Basic";


let HistoryInt=[], HistoryYear=[],series=[];
class Chart_Games_Home extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          options: {}
      }
    }
      componentWillMount() { 
            HistoryInt=[];
            HistoryYear=[];
            
          //console.log(this.props.Career.Meta.Games.history)

          this.props.Career.Meta.Games.history.map((h,i)=>{
            HistoryInt.push(h.Int);
            HistoryYear.push(h.year)
          }) 

        series = [
          {
            name: "Years 2",
            data: ['9','8','7','6','5','4']
          },
            {
              name: "Years 1",
              data: ['1','2','3','4','5','6']
            }
          ]
        

      }

      render() {
        
        //  options.plotOptions.radialBar.dataLabels.value.formatter(this.props.data["0"]);
      
          return (
            <Pod col={this.props.col}>
              <h1>{this.props.label}</h1>
              <h2>{this.props.total}</h2>
                  <BasicChart 
                      type="donut"
                      series={HistoryInt}
                      Labels={HistoryYear}

                    />

                    <BasicChart 
                      type="line"
                      series={series}
                      Labels={HistoryYear}
                    />


                    <BasicChart 
                      type="bar"
                      series={series}
                      Labels={HistoryYear}

                    />

                    <BasicChart 
                      type="area"
                      series={series}
                      Labels={HistoryYear}

                    />

                    <BasicChart 
                      type="pie"
                      series={HistoryInt}
                      Labels={HistoryYear}

                    
                    />

                    <BasicChart 
                      type="radialBar"
                      series={HistoryInt}
                      Labels={HistoryYear}
                    />
            </Pod>
               
          );
        }

}

export default Chart_Games_Home;