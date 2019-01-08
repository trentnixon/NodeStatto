import React, { Component } from "react";
import update from 'react-addons-update'
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

export default App;