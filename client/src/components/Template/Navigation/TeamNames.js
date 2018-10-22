// 
import React from 'react';


const NavBarTop = (props) => (
    <div className="TeamNames">
        {
            props.DATA.CLEAN.map((team,i)=>{
                   // console.log(team)
            })
        }
        
    </div>
);

export default  NavBarTop;