import React, { Component } from "react";
import Chart from "react-apexcharts";



 let options = {
    chart: {
        type: 'radialBar',
        toolbar: {
            show: true
            }
        },
    plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
           hollow: {
            margin: 0,
            size: '70%',
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
              offsetY: -20,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function(val) { console.log(val); return val; },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [70],
      stroke: { lineCap: 'round' },
      labels: ['Ranking'],
  }

 

class Radial extends Component {
/*  constructor(props) {
    super(props);
    }
*/

  componentWillMount() { 
        console.log(options, this.props.data["0"])
        //options.series
        options.labels = [this.props.label]
        options.series =[this.props.data["0"]];
   
  }


  render() {
    
  //  options.plotOptions.radialBar.dataLabels.value.formatter(this.props.data["0"]);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={options.series}
              
              type="radialBar"
             
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Radial;

