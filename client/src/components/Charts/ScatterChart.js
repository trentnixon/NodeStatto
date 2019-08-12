import React, { Component } from 'react';
import Chart from "react-apexcharts";
import {connect } from 'react-redux';

class ScatterChart extends React.Component {
      
    constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
              zoom: { type: 'xy'},
              animations: this.props.CHART.animations,
              toolbar: { tools: {  download: false,} },
              background: this.props.CHART.background,
              dropShadow: this.props.CHART.dropShadow,
              offsetX: this.props.CHART.offsetX,
              offsetY: this.props.CHART.offsetY,
            },
            dataLabels: { enabled: false},
            grid: {
              xaxis: { showLines: true},
              yaxis: { showLines: true },
            },
            xaxis: { type: 'datetime',},
            yaxis: { max: this.props.HS+10 },
            legend: this.props.CHART.legend,
            theme: this.props.CHART.theme,
          },
          series: this.props.DATA,
        }
      }

    componentWillMount() {  }  
    render() {
      return ( <Chart options={this.state.options} series={this.state.series} type="scatter" height="350" /> );
    }
  }
  const mapStateToProps = (state) => ({ CHART:state.CHARTS })
  export default connect(mapStateToProps)(ScatterChart); 