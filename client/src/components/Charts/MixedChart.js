/**
 * 
 *  Example : <Chart  series={this.state.Data} Labels={this.state.Labels} />
 * 
 */
import React, { Component } from "react";

import Chart from "react-apexcharts";
import {connect } from 'react-redux';
import update from 'react-addons-update'

class LineCharts extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "LineChart",
          zoom: {
            type: 'x',
            enabled: true
          },
          animations: this.props.CHART.animations,
          toolbar: { tools: {  download: false,} },
          background: this.props.CHART.background,
          dropShadow: this.props.CHART.dropShadow,
          offsetX: this.props.CHART.offsetX,
          offsetY: this.props.CHART.offsetY,
          stacked: false,
          
        },
        stroke: {
            width: [1],
            curve: 'smooth'
          },
        plotOptions: {
            bar: {
              columnWidth: '70%'
            }
          },
        xaxis: { 
            labels: {
                show: false,
            },
            categories: this.props.Labels,
          },
        
        label : this.props.Labels,
        fill: {
          type: 'gradient',
            gradient: {
              inverseColors: false,
              shadeIntensity: 1,
              shade: 'light',
              type: "vertical",
              opacityFrom: 1,
              opacityTo: 0.3,
              stops: [0, 98, 100]
            }
          },
        legend: this.props.CHART.legend,
        theme: this.props.CHART.theme,
        tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== "undefined") {
                  return y.toFixed(2);
                }
                return y;
              }
            }
          }
      },
      series: this.props.series,
    }; 
  } 

  CreateSeries(props){
    this.setState({ 
      series:props.series,
      options: update(this.state.options,{xaxis:{categories:{$set:this.props.Labels} }}) 
    })
  }

  componentWillMount() { this.CreateSeries(this.props) } 

  componentWillUpdate(){ return true;}
  
  componentDidUpdate(nextprops,nextState){
      if(this.props.series !== this.state.series){  this.setState({ Chart:null}); this.CreateSeries(nextprops)  }
  }

  render() {
    return (
      <div className="Charts HidePortait">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(LineCharts); 