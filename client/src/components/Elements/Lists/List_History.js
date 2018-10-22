import React from 'react';
const List_History = (props) => (

        props.Games.map((game,i)=>{
                return(
                    <div key={i}>
                        {game.Meta.Team}  vs {game.Meta.Opposition}
                    </div>
                   
                )
        })
);
export default List_History;