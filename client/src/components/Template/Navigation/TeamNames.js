import React from 'react';
const NavBarTop = (props) => (
    <div className="TeamNames">
        {
            props.DATA.CLEAN.map((team,i)=>{
                   //console.log(team)
                   return(
                       <div key={i}> </div>
                   )
            })
        }
    </div>
);

export default  NavBarTop;