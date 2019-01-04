import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
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
        legend: { 
          show: true,
          floating: false,
          position: 'bottom',
          horizontalAlign: 'center', 
        },
        theme: {
          palette: 'palette12', // If defined, it will overwrite globals.colors variable
    
          monochrome: { // monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
            enabled: true,
            color: '#5A2A27',
            shadeTo: 'light',
            shadeIntensity: 0.65
          }
        },
    
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ] 
    }; 
  } 

  render() {
    return (
      <div className="Charts">
      
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.props.series}
              type="line"
            
            />
          </div>
       
      </div>
    );
  }
}

export default App;