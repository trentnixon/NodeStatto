import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import PodHeaderBody from "../../Elements/pods/Pod_Header_Body";
import Donut from "../../Charts/donut";

import SingleBarPerc from "../../Charts/SingleBarPercentage";

let HistoryInt=[], HistoryYear=[], BarArr=[];
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
            BarArr=[];

          // eslint-disable-next-line
          this.props.DATA.CAREER.Career.Meta.Games.history.map((h,i)=>{
              HistoryInt.push(h.Int);
              HistoryYear.push(h.year)
              BarArr.push({data:[h.Int], name:h.year})
          })
      }

      render() { 
         
          return (
                <PodHeaderBody 
                    icon={<Avatar className="Avatar">{ this.props.DATA.CAREER.Career.Meta.Games.int}</Avatar>}
                    label={this.props.TITLE.PLAYED}
                    Footer=""
                    ClassName={this.props.ClassName}
                >
                
                  <SingleBarPerc DATA={BarArr} Label={this.props.TITLE.GAMES} />
                </PodHeaderBody>
          ); 
        }
}

export default Chart_Games_Home;

/*
 <Donut 
                      series={HistoryInt}
                      Labels={HistoryYear} 
                    />
*/