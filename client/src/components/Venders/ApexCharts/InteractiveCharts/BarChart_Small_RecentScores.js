import React, { Component } from "react";
import Chart from "react-apexcharts";
import Title from "../../Template/Page/Typography/PageTitle";
import SubTitle from "../../Template/Page/Typography/PageSubTitle";

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

        Form = this.props.DATA.CLEAN.slice(Math.max(this.props.DATA.CLEAN.length - 3, 1)).reverse();;
        

        //console.log(Form);
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
      <div>
          <Title Title={this.props.Title} />
          <SubTitle Title={""} />
          <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
              />
      </div>
            
    );
  }
}

export default App;