import React from 'react';
import Title from "../../../Elements/type/PageTitle";
import SubTitle from "../../../Elements/type/PageSubTitle";
import {LOGO} from "../../../Icons/icons";
const LoginHeader = props => (
    <div className="LoginHeader">
            <div className="Logo">
                <LOGO />
            </div>
            <div className="Titles">
                <Title Title="Statto" />
                <SubTitle Title="Reviewing your LMS Career" />
            </div>
         
        </div>
 );

 export default LoginHeader;