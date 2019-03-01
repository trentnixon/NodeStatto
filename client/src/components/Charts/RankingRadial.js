import React, { Component } from "react";
import Chart from "react-apexcharts";
import update from 'react-addons-update'


class Radial extends Component {
    constructor(props) {
      super(props);

      this.state = { 
        options :{
          chart: {
              type: 'radialBar',
              width: 300,
  
              toolbar: {
                  show: false
                  }
              },
          plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 225,
                 hollow: {
                  margin: 0,
                  size: '80%',
                  background: '#fff',
                  image: undefined,
                  imageOffsetX: 0,
                  imageOffsetY: 0,
                  position: 'front',
                  dropShadow: {
                    enabled: true,
                    top: 3,
                    left: 0,
                    blur: 4,
                    opacity: 0.24
                  }
                },
                track: {
                  background: '#fff',
                  strokeWidth: '67%',
                  margin: 0, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 4,
                    opacity: 0.35
                  }
                },
      
                dataLabels: {
                  showOn: 'always',
                  name: {
                    offsetY: -10,
                    show: true,
                    color: '#888',
                    fontSize: '12px'
                  },
                  value: {
                    formatter: function(val) {
                      return parseInt(val,10);
                    },
                    color: '#111',
                    fontSize: '24px',
                    offsetY: 10,
                    show: true,
                  }
                }
              }
            },
            fill: {},
            series: [70],
            stroke: { lineCap: 'round' },
            labels: [''],
        }
      }
    }



    SetNewState(data){
    
      this.setState({
        options: update(this.state.options,
                          {
                            series:{ $set:data.Percentage },
                            labels: { $set:data.Label },
                            plotOptions:{
                              radialBar:{
                                dataLabels:{
                                  value:{
                                    formatter:{
                                      $set:function() {
                                        return parseInt(data.Value,10);
                                      } 
                                    } 
                                  }
                                }
                              }
                            }
                          }
            ),
      })

     // this.state.options.plotOptions.radialBar.dataLabels.value.formatter(data.Value)
    //  console.log(this.state.options.plotOptions.radialBar.dataLabels.value.formatter)
  
    }
  componentWillMount() { 
    this.SetNewState(this.props)

  }
  shouldComponentUpdate(nextProps, nextState){ return true;}
  componentWillUpdate(nextProps, nextState){
    if(nextProps.Created !== this.props.Created){ this.SetNewState(nextProps)  }
  }

  render() {

    return (
          <Chart
              options={this.state.options}
              series={this.state.options.series}
              type="radialBar"
            />
    );
  }
}

export default Radial;

