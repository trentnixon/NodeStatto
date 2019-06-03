import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import PodHeaderBody from "../../Elements/pods/Pod_Header_Body";
import Donut from "../../Charts/donut";

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
                <PodHeaderBody
                    icon={<Avatar className="Avatar">{this.props.DATA.CAREER.Career.Meta.Games.int}</Avatar>}
                    label={this.props.Title}
                    Footer=""
                >
                    <Donut 
                      series={HistoryInt}
                      Labels={HistoryYear} 
                    />
                </PodHeaderBody>
          );
        }
}

export default Chart_Games_Home;