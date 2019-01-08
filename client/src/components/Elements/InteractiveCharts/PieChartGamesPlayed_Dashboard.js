import React, { Component } from "react";
import Donut from "../../Charts/donut";

import Title from "../../Elements/type/PageTitle";
import SubTitle from "../../Elements/type/PageSubTitle";

let HistoryInt=[], HistoryYear=[];
class Chart_Games_Home extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          options: {}
      }
    }
      componentWillMount() { 
            HistoryInt=[];
            HistoryYear=[];

          // eslint-disable-next-line
          this.props.DATA.CAREER.Career.Meta.Games.history.map((h,i)=>{
            HistoryInt.push(h.Int);
            HistoryYear.push(h.year)
          })
      }

      render() {
        
          return (
            <div>
                <Title Title={this.props.Title} />
                <SubTitle Title={this.props.DATA.CAREER.Career.Meta.Games.int} />
    
                  <Donut 
                      series={HistoryInt}
                      Labels={HistoryYear} 
                    />
            </div>
          );
        }
}

export default Chart_Games_Home;