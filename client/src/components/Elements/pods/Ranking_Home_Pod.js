import React, {Component} from "react";

import Pod from "../../Template/Page/Pod";
import TrendingUp from '@material-ui/icons/TrendingUp'
import TrendingDown from '@material-ui/icons/TrendingDown'
import TrendingFlat from '@material-ui/icons/TrendingFlat'

// let Progress = <TrendingFlat />;

export default class HomaeRanking extends Component { 
   
    FindArrow(data){
       
       // console.log(data)
        let Arrow;
        if(data.length > 0){
            if(data[data.length-2].rank < data[data.length-1].rank){
                Arrow= <TrendingDown nativeColor="#ce7070" className="RankingIcon"/>;
            }
            else if(data[data.length-2].rank > data[data.length-1].rank){
                Arrow =<TrendingUp nativeColor="#70ce90" className="RankingIcon"/>;
            }
            else if(data[data.length-2].rank === data[data.length-1].rank){
                Arrow =<TrendingFlat nativeColor="#cec570" className="RankingIcon"/>;
            }

            return Arrow;
        }
        
    }
    value(data,int){
      //  console.log(data);
        if(data.length>0){
            return data[data.length-int].rank
        }else{
            return 0;
        }
        
    }
    componentWillMount() { }
 
    render() {
        return(
            <Pod col={this.props.col} canvas="canvas1">
                <div className="Header">
                    <h1>{this.props.icon} {this.props.label}</h1>
                </div>
                <div className="Body">
                    <h2>{this.value(this.props.total,1) } {this.FindArrow(this.props.total)}</h2>  
                    <h3>Previous: {this.value(this.props.total,2)}</h3>
                </div>
                <div className="Footer">
                
                </div>
                
          </Pod>
        )
    }
}
