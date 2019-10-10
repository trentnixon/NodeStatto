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
          id: "HeatMap",
          animations: this.props.CHART.animations,
          toolbar:this.props.CHART.toolbar,
          background: this.props.CHART.background,
          dropShadow: this.props.CHART.dropShadow,
          offsetX: this.props.CHART.offsetX,
          offsetY: this.props.CHART.offsetY,
          
        },
        dataLabels: {
            enabled: true
          },
          plotOptions: {
            heatmap: {
                radius: 5,
                enableShades: true,
                shadeIntensity: .6,
                distributed: true,
                colorScale: {
                  inverse: false,
                  ranges: [{
                                from: -1,
                                to: 0,
                                name: ' ',
                                color: '#e4e2e2'
                            }],
                  min: -1,
                  max: undefined
                }
              },
           
          },
        colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8",
              '#A9D794','#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'],
        xaxis: {
            label: {
                text:'Balls Faced'
            },
            type: 'category',
            categories: ['1-5', '5-10',
                         '10-15', '15-20', 
                         '20-25', '25-30', 
                         '30-35', '35-40',
                         '40-45', '45-50', 
                         '50-55', '55-60',
                         '60 +']  
          },

        //label : this.props.Labels,
        //fill: this.props.CHART.fill,
        //legend: this.props.CHART.legend,
        theme: this.props.CHART.theme,
        responsive: this.props.CHART.responsive,
      },
      series: this.props.series,
    }; 
  } 

  componentWillMount() {} 

  render() {
    return (
      <div className="Charts HidePortait">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="heatmap" 
            
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(LineCharts); 