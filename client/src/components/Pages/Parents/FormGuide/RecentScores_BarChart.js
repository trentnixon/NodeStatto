import React, { Component } from "react";
import Chart from "react-apexcharts";
import Pod from "../../../Template/Page/Pod";


let Data=[],Categories=[],Form=[]
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
            chart: {
            id: "Batting-Bar-Recent",
         
            },
            xaxis: {
            categories: []
            }
      },
     
      series: [
            {
            name: "Runs",
            data: []
            }
      ]
    }
  }


  componentWillMount() { 
        Data=[];
        Categories=[];

        Form = this.props.DATA.CLEAN.slice(0,5);

        // console.log(Form);
        // eslint-disable-next-line
        Form.map((game,i)=>{
            if(game.Batting){
              Data.push(game.Batting.RunInt);
            }
             Categories.push(game.Meta.Opposition)
        })


        this.setState({
            options: {
                chart: {
                  id: "Batting-Bar-Recent"
                },
                xaxis: {
                  categories: Categories
                }
              },
              series: [
                {
                  name: "Runs",
                  data: Data
                }
              ]
            }
        );
    }

  render() {
    return (
         <Pod
          col={this.props.col}
         >
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
             
            />
        </Pod>
    );
  }
}

export default App;