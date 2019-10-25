import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const List_History = (props) => {
        
        return(
                <div className="Scorecard ListItem">

                    <div className="Player">
                        <Avatar
                            alt=""
                            src={"https://admin.lastmanstands.com/SpawtzApp/Images/User/"+props.item[0].id+"_UserProfileImage.jpeg"}
                            className="PlayerAvatar"
                        /> 
                        <h1>{props.item[0].Name} </h1>
                    </div>

                    <div className="HowOut">
                        <h2>{props.item[4]}</h2>
                    </div>
                    <div className={props.item[4] +" Runs  p_" + props.item[2]+props.item[3]}>  
                        <h2>{props.item[2]}</h2>
                    </div>

                    <div className={"Balls p_" + props.item[2]+props.item[3]}>
                        <small>{props.item[3]}</small>
                    </div>
                    <div className="StrikeRate">
                        <small>{props.item[5]}</small>
                    </div>
                </div>
        )};

export default List_History; 