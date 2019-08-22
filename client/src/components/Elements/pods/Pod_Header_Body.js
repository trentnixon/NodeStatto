import React, {Component} from "react";

// Pod Structure

import PodHeader from "./PodStructure/Pod_Header";
import PodFooter from "./PodStructure/Pod_Footer";
import Pod from "./Pod_Outer_Wrapper";

export default class PodHeaderBodyOnly extends Component { 
   
   
    componentWillMount() { }
  
    render() {
        
        return(
            <Pod col="" type="HeaderBodyPod" className={this.props.className} canvas="canvas1"> 
                <PodHeader icon={this.props.icon} label ={this.props.label} />
                    <div className="Body">
                        {this.props.children}
                    </div>
                <PodFooter>
                        {this.props.Footer}
                </PodFooter>
          </Pod>
        ) 
    }
}
