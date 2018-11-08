import store from "../store/index"
var _ = require('lodash');

let Stats={};

export function FormGuide(data){
    
    
    Stats={
        Career:{
            Meta:{
                Games:{
                    int:0,
                    history:[]
                },
            
                Rankings:{
                    Batting:[],
                    Bowling:[],
                    Keeping:[]
                }
            },
            batting:{
                    runs:0,
                    ballsFaced:0
            },
            bowling:{
                wickets:0
            },
            Keeping:{
                catches:0
            }
        },
        Form:{

        }
    };

    //console.log(data);

    // Lets create a form guide
     // eslint-disable-next-line
    data.map((game,i)=>{
          //  console.log(game)
 
            // Meta
            if(game.Meta){
                Stats.Career.Meta.Games.int = Add(Stats.Career.Meta.Games.int, 1)
                Stats.Career.Meta.Games.history = GameHistory(Stats.Career.Meta.Games.history,game.Meta)
                
            }
            // Batting
            if(game.Batting){
                // Addition
                Stats.Career.batting.runs = Add(Stats.Career.batting.runs, parseInt(game.Batting.RunInt,10))
                Stats.Career.batting.ballsFaced =   Add(Stats.Career.batting.ballsFaced, game.Batting.BallsFacedInt)
                
                // Push
                Stats.Career.Meta.Rankings.Batting =  rankingPush(Stats.Career.Meta.Rankings.Batting, parseInt(game.Batting.Ranking,10))
            }
            // Bowling
            if(game.Bowling){
                
                // Addition
                Stats.Career.bowling.wickets =  Add(Stats.Career.bowling.wickets, parseInt(game.Bowling.Wickets,10))
                // Ranking
                Stats.Career.Meta.Rankings.Bowling =  rankingPush(Stats.Career.Meta.Rankings.Bowling, parseInt(game.Bowling.Ranking,10))
                // 
            }
            // Keeping
            if(game.Keeping){
                Stats.Career.Keeping.catches = Add(Stats.Career.Keeping.catches, parseInt(game.Keeping.catches,10))
                Stats.Career.Meta.Rankings.Keeping =  rankingPush(Stats.Career.Meta.Rankings.Keeping, parseInt(game.Keeping.Ranking,10))
            }


    });
    
    store.dispatch({ type:"STORE_CAREER", payload:Stats});
}


function Add(data,value){  if(!isNaN(value)){ return (data+value);}else{ return data}  }

function rankingPush(data,value){ 
    if(!isNaN(value)){ data.push(value);}
    return data
}

function GameHistory(value,data){
    let gameDate = data.Date.split("/");
    let FixturePosition = _.findIndex(value, function(o) { return o.year=== '20'+gameDate[2]; });

   if(FixturePosition === -1){

                value.push({
                    year:'20'+gameDate[2],
                    Int:1,
                    Teams:[]
                })


        }else{
               // console.log(value[FixturePosition].Int)
                value[FixturePosition].Int = Add(value[FixturePosition].Int, 1)
        }

     //   console.log(value)
        return value;
}
