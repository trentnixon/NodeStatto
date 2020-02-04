import React, { Component } from "react";
import Pod from "../PodType/Pod_Basic";
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingDown from '@material-ui/icons/TrendingDown';
import TrendingFlat from '@material-ui/icons/TrendingFlat';
import PodHeader from "../PodStructure/Pod_Header";
import PodFooter from "../PodStructure/Pod_Footer";

import PodBody from "../PodStructure/Pod_Body";
export default class RankingHomePod extends Component {
    FindArrow(data) {
        let Arrow;
        if (data.length > 1) { 
            //console.log(data);
            if (data[data.length - 2].rank < data[data.length - 1].rank) {
                Arrow = <TrendingDown className="RankingIcon Down" />;
            }
            else if (data[data.length - 2].rank > data[data.length - 1].rank) {
                Arrow = <TrendingUp className="RankingIcon Up" />;
            }
            else if (data[data.length - 2].rank === data[data.length - 1].rank) {
                Arrow = <TrendingFlat  className="RankingIcon Flat" />;
            }
            return Arrow;
        }
    }
    value(data, int) {
        //console.log(data);
        if (data.length > 1) {
            return data[data.length - int].rank;
        }
        else {
            return 0;
        }
    }
    componentWillMount() { } 
    render() {
        return (
                <Pod col={this.props.col} type="RankingPod" canvas="canvas1">
                    <PodHeader icon={this.props.icon} label={this.props.label} />
                    <PodBody 
                        TopLine={this.value(this.props.total, 1)} 
                        Icon={this.FindArrow(this.props.total)} 
                        BottomLine={this.props.ProNoun + " : " + this.value(this.props.total, 2)} 
                    />
                     <PodBody>
                            <h2>{this.value(this.props.total,1)} {this.FindArrow(this.props.total)}</h2>  
                            <h3>{this.props.ProNoun +" : " +  this.value(this.props.total,2)}</h3>
                    </PodBody>

                    <PodFooter /> 
                </Pod>
            );
    }
}
