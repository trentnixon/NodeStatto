import React, { Component } from "react";
import Chart from "react-apexcharts";


class donut extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-donut"
            }
          },
          series: [44, 55, 41, 17, 15],
        };
      }
    
      componentWillMount() { }
    
    
      render() {
        
      //  options.plotOptions.radialBar.dataLabels.value.formatter(this.props.data["0"]);
    
        return (
            <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="donut"

            />
             
        );
      }
    }
    
    export default donut;
    
    