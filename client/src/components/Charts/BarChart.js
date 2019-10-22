/**
 * 
 *  Example :  <Bar  series={RunsYear}  Labels={Labels}/>
 * 
 */
import React, { Component } from "react";
import Chart from "react-apexcharts";
import {connect } from 'react-redux';
import update from 'react-addons-update'

class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      options: {
          chart: { 
              id: "bar-chart",
              stacked: false,
              animations: this.props.CHART.animations,
              toolbar:this.props.CHART.toolbar,
              background: this.props.CHART.background, 
              dropShadow: this.props.CHART.dropShadow,
              offsetX: this.props.CHART.offsetX,
              offsetY: this.props.CHART.offsetY,
          },
          plotOptions:this.props.CHART.plotOptions,
          xaxis: { categories: this.props.Labels },
          
          dataLabels: {
            enabled: true,
            style: {
                colors: ['#969696']
            },
          },
          labels: [],
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
            },
          legend: this.props.CHART.legend,
          theme: this.props.CHART.theme,
          responsive: this.props.CHART.responsive, 
      }
     
    };
  }

  componentWillMount() { }
  componentWillUpdate(){ return true;}
  componentDidUpdate(nextProps, nextState){
    if(this.props.Labels !== nextProps.Labels){
        this.setState({ 
            options: update(this.state.options,{xaxis:{categories:{$set:this.props.Labels} }}) 
        })
    }
}

  render() {
    return (
      <div className="Charts HidePortait">
          <Chart options={this.state.options} series={this.props.series} type="bar"  />
      </div>
           
    );
  }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(BarChart); 