/**
 * 
 * Example <InteractiveScatterChart 
                LookUp={this.props.DATA} 
                            DATA={Series} 
                            HS={this.props.HS} 
                            Disc="Batting"
                            Var="RunInt" 
                        />
 *  
 * 
 */
import React from 'react';
import Chart from "react-apexcharts";
import {connect } from 'react-redux';
import SnackBar from "../Elements/UI/SnackBar";

let timeout;
class ScatterChart extends React.Component {
      

  SetState(bar,game){ 
    this.setState({
      ...this.state,
      SnackBar: bar,
      Game:game
    })
  }

  SetTime(){
    timeout = setTimeout(function(){ this.SetState(false,false) }.bind(this),10000)
  }

  MarkerClicked(seriesIndex,dataPointIndex){
    //console.log(this.props.DATA[seriesIndex].data[dataPointIndex])
    if(this.props.Disc !== null){
        this.SetState(false,false)

        let Path = this.props.DATA[seriesIndex].data[dataPointIndex];
        let CreateLink=[];
        this.props.LookUp.map((game,i)=>{
            if((game.Meta.FixtureInt*1000) === Path[0])
                if(game[this.props.Disc][this.props.Var] === Path[1]){
                  CreateLink.push(game.Meta.Team,game.Meta.Opposition,game.Meta.Fixture)
                  //console.log(game.Meta.Team,game.Meta.Opposition,game.Meta.Fixture)
                }
                return true;
        });
        clearTimeout(timeout);
        this.SetState(true,CreateLink)
        this.SetTime();
    }
  }

    constructor(props) {
        super(props);
        
        this.MarkerClicked = this.MarkerClicked.bind(this);

        this.state = {
          SnackBar:false,
          Game:[null,null,null],
          options: {
            chart: {
              zoom: { type: 'xy'},
              animations: this.props.CHART.animations,
              toolbar: { tools: {  download: false,} },
              background: this.props.CHART.background,
              dropShadow: this.props.CHART.dropShadow,
              offsetX: this.props.CHART.offsetX,
              offsetY: this.props.CHART.offsetY,
              events: {
                dataPointSelection: function(event, chartContext, config) {
                  //console.log(event);
                  //console.log(this.props.LookUp);
                  this.MarkerClicked(config.seriesIndex, config.dataPointIndex);
                }.bind(this)
              }
            },
           
            dataLabels: { enabled: false},
            grid: {
              xaxis: { showLines: true},
              yaxis: { showLines: true },
            },
            xaxis: { type: 'datetime',},
            yaxis: { max: this.props.HS+10 },
            legend: this.props.CHART.legend,
            theme: this.props.CHART.theme,
          },
          series: this.props.DATA,
        }
      }

    componentWillMount() {  }  
    render() {
      return ( 
        <div>
            <Chart options={this.state.options} series={this.state.series} type="scatter" height="350" /> 
            <SnackBar open={this.state.SnackBar} Game={this.state.Game} />
        </div>
            
        );
    }
  }
  const mapStateToProps = (state) => ({ CHART:state.CHARTS })
  export default connect(mapStateToProps)(ScatterChart); 