/**
 * 
 *  Example :  <Bar  series={RunsYear}  Labels={Labels}/>
 * 
 */
import React, { Component } from "react";
import Chart from "react-apexcharts";
import {connect } from 'react-redux';

class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      options: {
          chart: { 
              id: "bar-chart",
              stacked: true,
              animations: this.props.CHART.animations,
              toolbar:this.props.CHART.toolbar,
              background: this.props.CHART.background,
              dropShadow: this.props.CHART.dropShadow,
              offsetX: this.props.CHART.offsetX,
              offsetY: this.props.CHART.offsetY,
          },
          plotOptions:this.props.CHART.plotOptions,
          xaxis: { categories: this.props.Labels },
          labels: [],
          fill: this.props.CHART.fill,
          legend: this.props.CHART.legend,
          theme: this.props.CHART.theme,
      }
     
    };
  }

  componentWillMount() { }
  componentWillUpdate(){ return true;}
  render() {
    return (
            <Chart options={this.state.options} series={this.props.series} type="bar"  />
    );
  }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(BarChart);