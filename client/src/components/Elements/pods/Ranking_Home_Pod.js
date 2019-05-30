import React, {Component} from "react";

import Pod from "../../Template/Page/Pod";
import TrendingUp from '@material-ui/icons/TrendingUp'
import TrendingDown from '@material-ui/icons/TrendingDown'
import TrendingFlat from '@material-ui/icons/TrendingFlat'

// Pod Structure
import PodHeader from "./PodStructure/Pod_Header";
import PodFooter from "./PodStructure/Pod_Footer";
import PodBody from "./PodStructure/Pod_Value_and_Icon_Body"; 

export default class RankingHomePod extends Component { 
   
    FindArrow(data){
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
      //console.log(data);
        if(data.length>0){
            return data[data.length-int].rank
        }else{
            return 0;
        } 
    }
    componentWillMount() { }
  
    render() {
        
        return(
            <Pod col={this.props.col} type="IconPod" canvas="canvas1">
                <PodHeader icon={this.props.icon} label ={this.props.label} />
                <PodBody 
                    TopLine={this.value(this.props.total,1) }
                    Icon = {this.FindArrow(this.props.total)}
                    BottomLine={this.props.ProNoun +" : " +  this.value(this.props.total,2)}
                /> 
                <PodFooter />
          </Pod>
        ) 
    }
}
