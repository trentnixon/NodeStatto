/**
 * 
 *  Example :  <Bar  series={RunsYear}  Labels={Labels}/>
 * 
 */
import React, { Component } from "react";
import Chart from "react-apexcharts";
import {connect } from 'react-redux';
import update from 'react-addons-update'
import {ChartMouseEnter} from "../../actions/ga";
import SnackBar from "../Elements/UI/LinkSnackBar";

// Variables
let timeout;
class BarChart extends Component {


  constructor(props) {
    super(props);
    this.MarkerClicked = this.MarkerClicked.bind(this);
    this.state = { 
        SnackBar:false,
        Link:null,
        title:null,
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
              events: { 
                dataPointSelection: function(event, chartContext, config) {
                  console.log(this.props.Labels[config.dataPointIndex]);
                 //console.log(this.props.LookUp);
                  this.MarkerClicked(this.props.Labels[config.dataPointIndex]);
                  ChartMouseEnter("Chart Data Point Mouse Click", "Month by Year",(config.dataPointIndex+1)+'/'+this.props.series[config.seriesIndex].name)
                }.bind(this),
                dataPointMouseEnter: function(event, chartContext, config) {
                  ChartMouseEnter("Chart Data Point Mouse Enter", "Month by Year",(config.dataPointIndex+1)+'/'+this.props.series[config.seriesIndex].name)
                }.bind(this)
              }
          },
          
          plotOptions: {
            bar: {
              colors: {
                ranges: [
                    {
                        from: 20,
                        to: 2000,
                        color: '#70ce90'
                      },
                      {
                        from: -20,
                        to: 20,
                        color: '#cec570'
                      },
                    {
                        from: -2000,
                        to: -20,
                        color:'#ce7070'
                    }
                ]
              },
              columnWidth: '80%',
            }
          },
          xaxis: { categories: this.props.Labels },
          dataLabels: {
            enabled: false,
            style: {
                colors: ['#70ce90']
            },
          },
          labels: [],
         
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
      }
     
    };
  }

  SetState(bar,Link,Title){ 
        this.setState({
            ...this.state,
            SnackBar: bar,
            Link:Link,
            Title:Title
        })
  }

  SetTime(){
    timeout = setTimeout(function(){ this.SetState(false,false) }.bind(this),10000)
  }

  MarkerClicked(SelectedDate){
    let SplitDate = SelectedDate.split(" ")
    let Path = this.props.BasePath+'/'+SplitDate[1]+'/'+SplitDate[0]

    let Title = "View Stats for " + SplitDate[1]+' '+SplitDate[0]; 
    clearTimeout(timeout);
    this.SetState(true,Path,Title)
    this.SetTime();

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
          <SnackBar open={this.state.SnackBar} Link={this.state.Link} Title={this.state.Title} />
      </div>
           
    );
  }
}

const mapStateToProps = (state) => ({ CHART:state.CHARTS })
export default connect(mapStateToProps)(BarChart);