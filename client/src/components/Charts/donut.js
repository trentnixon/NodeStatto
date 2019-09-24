/**
 * 
 * Example : <Donut  series={PieBalls} Labels={Labels} />
 * 
 */

import React, { Component } from "react";
import Chart from "react-apexcharts";
import {connect } from 'react-redux';

class Chart_DONUT extends Component {
 
  constructor(props) {
    super(props);
    this.state = { 
      options: {
          chart: { 
              id: "basic-chart",
              animations: this.props.CHART.animations,
              toolbar:this.props.CHART.toolbar,
              background: this.props.CHART.background,
              dropShadow: this.props.CHART.dropShadow,
              offsetX: this.props.CHART.offsetX,
              offsetY: this.props.CHART.offsetY,
          },
          xaxis: { categories: this.props.Labels },
          labels: this.props.Labels,
          legend: this.props.CHART.legend,
          theme: this.props.CHART.theme,
      },
     
      series:this.props.series,
    };
  }

      componentWillMount() { }

      render() {
          return (
            <div className="Charts HidePortait"> <Chart options={this.state.options} series={this.state.series} type="donut" /></div>
           
          );
        }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(Chart_DONUT); 
