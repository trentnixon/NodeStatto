/**
 * 
 *  Example : <Chart  series={this.state.Data} Labels={this.state.Labels} />
 * 
 */
import React, { Component } from "react";

import Chart from "react-apexcharts";
import {connect } from 'react-redux';

class LineCharts extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "LineChart",
          animations: this.props.CHART.animations, 
          toolbar:this.props.CHART.toolbar,
          background: this.props.CHART.background,
          dropShadow: this.props.CHART.dropShadow,
          offsetX: this.props.CHART.offsetX,
          offsetY: this.props.CHART.offsetY,          
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          } 
        },
        tooltip: {
          shared: true,
        },
        xaxis: { categories: this.props.Labels,},
        yaxis: {
          forceNiceScale: true
        },
        label : this.props.Labels,
        fill: this.props.CHART.fill,
        
        legend: this.props.CHART.legend,
        theme: this.props.CHART.theme,
        responsive: this.props.CHART.responsive,
      },
      series: this.props.series,
    }; 
  } 

  componentWillMount() {} 
  shouldComponentUpdate(){return true;}
  componentDidUpdate(nextProps, nextState){} 

  render() {
    return (
      <div className="Charts HidePortait">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.props.series}
              type="area" 
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(LineCharts);  