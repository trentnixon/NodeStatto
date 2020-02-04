import React from 'react';
import Title from "../../../../Template/Page/Typography/PageTitle";
import SubTitle from "../../../../Template/Page/Typography/PageSubTitle";
import {LOGO} from "../../../../Template/Utilities/Icons/icons";

const LoginHeader = props => (
    <div className="LoginHeader">
            <div className="Logo"> <LOGO /></div>
            <div className="Titles">
                <Title Title={props.LABELS.META.SITENAME} />
                <SubTitle Title={props.LABELS.META.BYLINE} />
            </div>
        </div>
 );

 export default LoginHeader; 