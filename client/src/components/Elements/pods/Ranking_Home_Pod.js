import React, {Component} from "react";

import Pod from "../../Template/Page/Pod";
import TrendingUp from '@material-ui/icons/TrendingUp'
import TrendingDown from '@material-ui/icons/TrendingDown'
import TrendingFlat from '@material-ui/icons/TrendingFlat'

let Progress = <TrendingFlat />;
export default class HomaeRanking extends Component { 
   
    FindArrow(data){
       
       // console.log(data)
        let Arrow;
        if(data.length > 0){
            if(data[data.length-2].rank < data[data.length-1].rank){
                Arrow= <TrendingDown nativeColor="red" className="RankingIcon"/>;
            }
            else if(data[data.length-2].rank > data[data.length-1].rank){
                Arrow =<TrendingUp nativeColor="green" className="RankingIcon"/>;
            }
            else if(data[data.length-2].rank === data[data.length-1].rank){
                Arrow =<TrendingFlat nativeColor="yellow" className="RankingIcon"/>;
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
            <Pod col={this.props.col}>
                <h1>{this.props.label}  {this.FindArrow(this.props.total)} </h1>
                <h2>{this.value(this.props.total,1) }</h2>  
                <h3>Previous: {this.value(this.props.total,2)}</h3>
          </Pod>
        )
    }
}
