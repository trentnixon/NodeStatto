import React  from "react";

import Pod from "./Pod_Outer_Wrapper";
import PodHeader from "./PodStructure/Pod_Header";
import PodSingleValueBody from "./PodStructure/Pod_Value_Body";
import PodFooter from "./PodStructure/Pod_Footer";


const IconPod = (props) => (

    <Pod type="IconPod" className={props.className} canvas="canvas1">
        <PodHeader icon={props.icon} label ={props.label} />
        <PodSingleValueBody Value={props.total}/>
        <PodFooter>{props.Footer}</PodFooter>
    </Pod>

);
export default IconPod; 
   