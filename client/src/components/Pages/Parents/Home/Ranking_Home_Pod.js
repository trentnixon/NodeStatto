import React, {Component} from "react";

import Pod from "../../../Template/Page/Pod";
import TrendingUp from '@material-ui/icons/TrendingUp'
import TrendingDown from '@material-ui/icons/TrendingDown'
import TrendingFlat from '@material-ui/icons/TrendingFlat'

let Progress = <TrendingFlat />;
export default class HomaeRanking extends Component {
   
    FindArrow(data){
       // console.log(data)
        let Arrow;
        if(data[data.length-2] < data[data.length-1]){
            Arrow= <TrendingDown nativeColor="red" className="RankingIcon"/>;
        }
        else if(data[data.length-2] > data[data.length-1]){
            Arrow =<TrendingUp nativeColor="green" className="RankingIcon"/>;
        }
        else if(data[data.length-2] === data[data.length-1]){
            Arrow =<TrendingFlat nativeColor="yellow" className="RankingIcon"/>;
        }

        return Arrow;
    }
    componentWillMount() { 
        Progress = this.FindArrow(this.props.total)
    }

    render() {
        return(
            <Pod col={this.props.col}>
                <h1>{this.props.label}  {Progress} </h1>
                <h2>{this.props.total[this.props.total.length-1]}</h2>  
                <h3>Previous: {this.props.total[this.props.total.length-2]}</h3>
          </Pod>
        )
    }
}
