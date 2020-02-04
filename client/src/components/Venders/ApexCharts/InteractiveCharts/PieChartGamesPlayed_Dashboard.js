import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import PodHeaderBody from "../../../Template/Page/Structure/Pods/PodType/Pod_Header_Body_Footer";

// Sections
import SingleBarPerc from "../../../Venders/ApexCharts/SingleBarPercentage";

// Variables

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
            //BarArr=[];

          // eslint-disable-next-line
          this.props.DATA.CAREER.Meta.Games.history.map((h,i)=>{
              HistoryInt.push(h.Int);
              HistoryYear.push(h.year)
              //BarArr.push({data:[h.Int], name:h.year})
          })
      } 

      render() { 

        console.log(this.props.TITLES.SITE.TITLES.PLAYED);

          return ( 
              <PodHeaderBody 
                    icon={<Avatar className="Avatar">{ this.props.DATA.CAREER.Meta.Games.int}</Avatar>}
                    label={this.props.TITLES.SITE.TITLES.PLAYED}
                    Footer=""
                    className={this.props.className} 
                >
                  <SingleBarPerc DATA={[HistoryInt, HistoryYear]} Label={this.props.TITLES.SITE.TITLES.GAMES} />
                </PodHeaderBody>      
          ); 
        }
}

export default Chart_Games_Home;