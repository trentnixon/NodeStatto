import React, {Component} from "react";

// Pod Structure
import Wrapper from "../PodStructure/Pod_Outer_Wrapper";
import PodHeader from "../PodStructure/Pod_Header";
import PodBody from "../PodStructure/Pod_Body";
import PodFooter from "../PodStructure/Pod_Footer";

export default class PodHeaderBodyOnly extends Component { 
   
   
    componentWillMount() { } 
  
    render() {
        
        return(
            <Wrapper col="" type="HeaderBodyPod" className={this.props.className} canvas="canvas1"> 
                <PodHeader icon={this.props.icon} label ={this.props.label} />
                <PodBody>
                    {this.props.children}
                </PodBody>
                <PodFooter>
                    {this.props.Footer}
                </PodFooter> 
            </Wrapper>
        ) 
    }
}
