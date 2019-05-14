import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import Donut from "../../Charts/donut";

// import Title from "../../Elements/type/PageTitle";
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
            <div className={this.props.col}>
              <div className="ContentContainer canvas1" >
                <div className="Header">
                <SubTitle Title={this.props.Title} />
                  <Avatar className="Avatar"  >{this.props.DATA.CAREER.Career.Meta.Games.int}</Avatar>
                  
                </div>
                <div className="Body">
                  <Donut 
                        series={HistoryInt}
                        Labels={HistoryYear} 
                      />
                </div>
              </div>
            </div>
          );
        }
}

export default Chart_Games_Home;