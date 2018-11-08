import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

let batting,Bowling;
const List_History = (props) => (

        props.Games.map((game,i)=>{ 
                batting='';
                Bowling=''
                let Text = game.Meta.Team +" vs "+ game.Meta.Opposition;

                if(game.Batting){ batting = game.Batting.RunsValue +" from "+ game.Batting.BallsFaced;}
                if(game.Bowling){ Bowling = game.Bowling.Figures +" off "+ game.Bowling.Overs;}
              
                return(
                    <ListItem button key={i}>
                        <Avatar >W</Avatar>
                        <ListItemText 
                            primary={Text}
                            secondary={batting +'  '+ Bowling}
                        />
                    </ListItem>
                )
        })
);
export default List_History; 
