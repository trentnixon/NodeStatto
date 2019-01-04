import React, { Component } from "react";

import Pod from "../../../Template/Page/Pod";
import BasicChart from "../../../../components/Charts/Statto_Chart_Basic";


let HistoryInt=[], HistoryYear=[];
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
          // eslint-disable-next-line
          this.props.Career.Meta.Games.history.map((h,i)=>{
            HistoryInt.push(h.Int);
            HistoryYear.push(h.year)
          })
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
            </Pod>
          );
        }
}

export default Chart_Games_Home;