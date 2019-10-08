/**
 * 
 *  Example :  <Bar  series={RunsYear}  Labels={Labels}/>
 * 
 */
import React, { Component } from "react";
import Chart from "react-apexcharts";
import {connect } from 'react-redux';
import SnackBar from "../Elements/UI/LinkSnackBar";
import {ChartMouseEnter} from "../../actions/ga";

let timeout;
class BarChart extends Component {


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

  MarkerClicked(seriesIndex,dataPointIndex){

        let Path = this.props.BasePath+'/'+(dataPointIndex+1)+'/'+this.props.series[seriesIndex].name
        let Title = 'View Stats for '+ (dataPointIndex+1) +'/'+this.props.series[seriesIndex].name
  
        clearTimeout(timeout);
        this.SetState(true,Path,Title)
        this.SetTime();

  }

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
              stacked: true,
              animations: this.props.CHART.animations,
              toolbar:this.props.CHART.toolbar,
              background: this.props.CHART.background, 
              dropShadow: this.props.CHART.dropShadow,
              offsetX: this.props.CHART.offsetX,
              offsetY: this.props.CHART.offsetY,
              events: { 
                dataPointSelection: function(event, chartContext, config) {
                  //console.log(event,config.seriesIndex, config.dataPointIndex);
                 //console.log(this.props.LookUp);
                  this.MarkerClicked(config.seriesIndex, config.dataPointIndex);
                  ChartMouseEnter("Chart Data Point Mouse Click", "Month by Year",(config.dataPointIndex+1)+'/'+this.props.series[config.seriesIndex].name)
                }.bind(this),
                dataPointMouseEnter: function(event, chartContext, config) {
                  ChartMouseEnter("Chart Data Point Mouse Enter", "Month by Year",(config.dataPointIndex+1)+'/'+this.props.series[config.seriesIndex].name)
                }.bind(this)
              }
          },
          plotOptions:this.props.CHART.plotOptions,
          xaxis: { categories: this.props.Labels },
          labels: [],
          fill: this.props.CHART.fill,
          legend: this.props.CHART.legend,
          theme: this.props.CHART.theme,
      }
     
    };
  }

  componentWillMount() { }
  componentWillUpdate(){ return true;}
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