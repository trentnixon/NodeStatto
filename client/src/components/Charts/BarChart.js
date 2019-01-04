import React, { Component } from "react";
import Chart from "react-apexcharts";
import update from 'react-addons-update'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      options: {
          chart: { 
              id: "basic-chart",
              stacked: true,
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
            
              columnWidth: '90%', // should be in percent 0 - 100
              barHeight: '90%', // should be in percent 0 - 100
              distributed: false,
              colors: {
                ranges: [],
                backgroundBarColors: [],
                backgroundBarOpacity: 1
              },
              dataLabels: {
                position: 'center' // top, center, bottom
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
     
      series: 
        [{
          name:"Statto : Change This",
          data:[]
        }]
      ,
    };
  }



  SetNewState(data){
    this.setState({
      series:  update(this.state.series, {$set: data.series}),
      options: update(this.state.options,
                        {
                          xaxis:{
                              categories:{
                                  $set:data.Labels
                                }
                              },
                          plotOptions:{
                            bar:{
                              horizontal:{
                                $set:data.horizontal
                              }
                            }
                          },
                          labels:{
                              $set:data.Labels
                            }
                        }
          ),
      
    })
    

  }
  componentWillMount() {  this.SetNewState(this.props)}

  shouldComponentUpdate(nextProps, nextState){ return true;}
  componentWillUpdate(nextProps, nextState){
    if(nextProps.Created !== this.props.Created){ this.SetNewState(nextProps)  }
  }

  render() {

    return (
      <div className="app">
      
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
            />
          </div>
       
      </div>
    );
  }
}

export default App;