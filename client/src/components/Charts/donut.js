import React, { Component } from "react";
import Chart from "react-apexcharts";
import update from 'react-addons-update'

class Chart_Games_Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = { 
      options: {
          chart: { 
              id: "basic-chart",
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
              toolbar: {
                  show: true,
                  tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true
                  },
                  autoSelected: 'zoom' // accepts -> zoom, pan, selection
              },
          },
          plotOptions:{
            bar: {
              horizontal: false,
              endingShape: 'rounded',
              columnWidth: '70%', // should be in percent 0 - 100
              barHeight: '70%', // should be in percent 0 - 100
              distributed: false,
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: 'top' // top, center, bottom
              }
              // stackedLabels: true // TODO
            }
          },
          xaxis: { categories: [] },
          labels: [],
          legend: { 
            show: true,
            floating: false,
            position: 'bottom',
            horizontalAlign: 'center', 
          },
          theme: {
            palette: 'palette3', // If defined, it will overwrite globals.colors variable
      /*
            monochrome: { // monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
              enabled: true,
              color: '#5A2A27',
              shadeTo: 'light',
              shadeIntensity: 0.65
            }
            */
          },
      },
     
      series: [],
    };
  }

      componentWillMount() { 
     
        this.setState({
            series:  update(this.state.series,  {$set: this.props.series}),
            options: update(this.state.options,{xaxis:{categories:{$set:this.props.Labels}}}),
            // eslint-disable-next-line 
            options: update(this.state.options,{labels:{$set:this.props.Labels}})
          })
      }

      render() {
 
        console.log(this.state.series);
        
          return (

                  <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="donut"
                        
                  />
          );
        }
}

export default Chart_Games_Home;