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
          id: "RadialChart",
          animations: this.props.CHART.animations,
          toolbar:this.props.CHART.toolbar,
          background: this.props.CHART.background, 
          dropShadow: this.props.CHART.dropShadow,
          offsetX: this.props.CHART.offsetX,
          offsetY: this.props.CHART.offsetY, 
          
        },
        title: {
          text: 'Current Form',
          align: 'center',
          margin: 0,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '25px',
            color:  '#969696'
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '80%',
            },
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: 0,
                show: true,
                color: this.props.DisplayColor,
                fontSize: "25px"
              },
              value: {
                color: "#111",
                fontSize: "30px",
                show: false
              }
            }
          },
          
        },
        stroke: {
          lineCap: "round",
        },
        tooltip: {
          shared: true,
        },
        xaxis: { categories: this.props.Labels,},

        labels : this.props.Labels,
        fill: {
          colors:[this.props.DisplayColor]
        },
        
        legend: this.props.CHART.legend,
        theme: this.props.CHART.theme,
        responsive: [
          {
            breakpoint: 5000,
            options: {
              chart: { 
                  height:250,
              }
            }
          },{
              breakpoint: 2000,
              options: {
                chart: { 
                    height:250,
                }
              }
            },
            {
            breakpoint: 1024,
            options: {
              chart: { 
                  height:200,
              }
            }
          }
        ]
  
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
              type="radialBar"
            />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(LineCharts);  