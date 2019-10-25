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

                    <div className={"Overs w_"+props.item[9]}>
                        <h2>{props.item[6]}</h2>
                    </div>
                    <div className={props.item[4] +" Wickets w_"+props.item[9]}>  
                        <h2>{props.item[9]}</h2>
                    </div>

                    <div className={"Runs w_"+props.item[9]}>
                        <h2>{props.item[7]}</h2> 
                    </div>
                    <div className="Economy">
                        <small>{props.item[8]}</small>
                    </div>
                </div>
        )};

export default List_History; 