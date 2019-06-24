import React, { Component } from "react";
import update from 'react-addons-update'
import Chart from "react-apexcharts";


/**
 * Include Annotations to line charts
 * annotations: {
          points: [
            {
              x: new Date("27 Nov 2017").getTime(),
              y: 8500.9,
              marker: {
                size: 6,
                fillColor: "#fff",
                strokeColor: "#2698FF",
                radius: 2
              },
              label: {
                borderColor: "#FF4560",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#FF4560"
                },
      
                text: "Best"
              }
            }
          ]
        },
 */

export default class LineCharts extends Component { 
  constructor(props) {
    super(props);
 
    this.state = {
      options: {
        
        chart: {
          id: "LineChart",
            animations: {
              enabled: true,
              easing: 'easeinout', // linear, easeout, easein, easeinout 
              speed: 800,
              animateGradually: {
                delay: 250,
                enabled: true
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350
              }
          },
          background: 'transparent',
          dropShadow: { enabled: false},
          offsetX: 0,
          offsetY: 0,
          height: 400,
          toolbar: {
              show: true,
              tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false
              },
              autoSelected: 'zoom' // accepts -> zoom, pan, selection
          },
        },
        legend: { 
          show: true,
          floating: false,
          position: 'bottom',
          horizontalAlign: 'center', 
        },
        theme: {
          palette: 'palette3', // If defined, it will overwrite globals.colors variable

        },
        xaxis: {
          categories: [],
        } 
      },
      series: [],
    }; 
  } 

  componentWillMount() { 
     
    //console.log(this.props.series);

    this.setState({
        series:  update(this.state.series,  {$set: this.props.series}),
        options: update(this.state.options,{xaxis:{categories:{$set:this.props.Labels}}}),
        // eslint-disable-next-line 
        options: update(this.state.options,{labels:{$set:this.props.Labels}})
      })
  }

  render() {
    return (
      <div className="Charts">
      
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