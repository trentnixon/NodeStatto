import React, {Component} from "react";

import Pod from "../../../Template/Page/Pod";
import TrendingUp from '@material-ui/icons/TrendingUp'
import TrendingDown from '@material-ui/icons/TrendingDown'
import TrendingFlat from '@material-ui/icons/TrendingFlat'

let Arrow, Progress = <TrendingFlat />;
export default class HomaeRanking extends Component {
   
    FindArrow(data){
        console.log(data)
        let Arrow;
        if(data[1] < data[0]){
            Arrow= <TrendingDown nativeColor="red" className="RankingIcon"/>;
        }
        else if(data[1] > data[0]){
            Arrow =<TrendingUp nativeColor="green" className="RankingIcon"/>;
        }
        else if(data[1] === data[0]){
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
                <h2>{this.props.total[0]}</h2>  
                <h3>Previous: {this.props.total[1]}</h3>
          </Pod>
        )
    }
}
