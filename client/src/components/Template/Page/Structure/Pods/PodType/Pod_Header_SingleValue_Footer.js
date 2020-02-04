import React  from "react";

import Pod from "../PodStructure/Pod_Outer_Wrapper";
import PodHeader from "../PodStructure/Pod_Header";
import PodBody from "../PodStructure/Pod_Body";
import PodFooter from "../PodStructure/Pod_Footer";
import SubTitle from "../../../Typography/PageSubTitle";

const IconPod = (props) => (
    <Pod type="IconPod" className={props.className} canvas="canvas1">
        <PodHeader icon={props.icon} label ={props.label} />
        <PodBody>
            <SubTitle Title={props.total} />
        </PodBody>
        <PodFooter>
            {props.Footer}
        </PodFooter>
    </Pod>
);
export default IconPod; 
   