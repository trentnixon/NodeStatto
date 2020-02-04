/**
 * Send Data Set as 
 * 
 *      series: [{ name: 'Label', 
                    data: [44] // as arr
                }]
 * 
        Example : <SingleBarPerc DATA={BarArr} Label={this.props.TITLE.GAMES} />
 */


import React  from 'react';
import Chart from "react-apexcharts";
import {connect } from 'react-redux';

class SingleBarChart extends React.Component {
      
      constructor(props) {
        super(props);

        this.state = {
          options: {
                chart: {
                    animations: this.props.CHART.animations,
                    toolbar:this.props.CHART.toolbar,
                    background: this.props.CHART.background,
                    dropShadow: this.props.CHART.dropShadow,
                    offsetX: this.props.CHART.offsetX,
                    offsetY: this.props.CHART.offsetY,
                    width:300

                },
                labels : this.props.DATA[1],
                plotOptions: { bar: { horizontal: true,}, },
                stroke: this.props.CHART.stroke,
                xaxis: { categories: [this.props.Label],},
                tooltip: {
                y: {
                    formatter: function (val) { return val + " Games" }
                }
                },
                fill: this.props.CHART.fill,
                legend: this.props.CHART.legend,
                theme: this.props.CHART.theme,
                responsive: this.props.CHART.responsive,
              
          },
          series: this.props.DATA[0],
        } 
      }
 
      render() {
        
         console.log(this.state.series, this.state.options, this.props.DATA)
        return ( <Chart options={this.state.options} series={this.state.series} type="pie"  /> );
      }
    }

    const mapStateToProps = (state) => ({ CHART:state.CHARTS })
    export default connect(mapStateToProps)(SingleBarChart); 