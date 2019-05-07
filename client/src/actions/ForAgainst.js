
import store from "../store/index"
import {CalculateBatting} from "./CalculateStats"

const Batting = new CalculateBatting();


var _ = require('lodash');

    /**    
    *     Store For Against Functions 
    */
//function 

function hasProperty(Property,parent,sub){

    if(Property[parent] && Property[parent][sub]){ return parseInt(Property[parent][sub],10)
    } else{ return 0; }
}

  function StoreForAgainstDetails(thisGame, StatsFor, int){
     // console.log(thisGame)
        let ObjKey = StatsFor[int];
        
        // Meta
        ObjKey.Game=StatsFor[int].Games+1;
      
        // Batting
        if(thisGame['Batting']){
            ObjKey.Innings=StatsFor[int].Innings+1;
            ObjKey.AVG =   parseFloat((StatsFor[int].Runs/(StatsFor[int].Innings-StatsFor[int].NO)).toFixed(2));
            ObjKey.SR =  parseFloat((StatsFor[int].Runs/StatsFor[int].BF*100).toFixed(2));
           
            if(isNaN(ObjKey.SR)){ObjKey.SR=0}
        }
      //  ObjKey.Innings=StatsFor[int].Innings+1;
        ObjKey.Runs=StatsFor[int].Runs + hasProperty(thisGame,'Batting','RunInt');
        ObjKey.BF=StatsFor[int].BF + hasProperty(thisGame,'Batting','BallsFacedInt');
        ObjKey.NO=StatsFor[int].NO + hasProperty(thisGame,'Batting','NotOut');
        

        // Bowling 
        ObjKey.Wickets=StatsFor[int].Wickets + hasProperty(thisGame,'Bowling','Wickets');
        ObjKey.Overs=StatsFor[int].Overs + hasProperty(thisGame,'Bowling','OversInt');
        ObjKey.RunsConceded=StatsFor[int].RunsConceded + hasProperty(thisGame,'Bowling','Runs');
  }

function StoreNew(Thisgame, StatsFor, Team, TeamID){
    StatsFor.push(
        {
            "Team":Thisgame.Meta[Team],
            "ID":Thisgame.Meta[TeamID],
            "Game":0,
            "Innings":0,
            "Runs":0,
            "BF":0,
            "NO":0,
            "AVG":0,
            "SR":0,
            "Wickets":0,
            "Overs":0,
            "RunsConceded":0
        }
    )

    return StatsFor;
}

export function ForAgainst(data){

    let StatsFor =[]
    let StatsAgainst =[]

    // eslint-disable-next-line
    data.map((Thisgame,id)=>{

        let TeamPositionFor = _.findIndex(StatsFor, function(o) { return o.ID === Thisgame.Meta.TeamID; });
        let TeamPositionAgainst = _.findIndex(StatsAgainst, function(o) { return o.ID === Thisgame.Meta.OppositionID; });
        
        if(TeamPositionFor === -1){ 
            StoreForAgainstDetails(Thisgame, StatsFor, StoreNew(Thisgame, StatsFor,"Team","TeamID").length-1) }
       
            else{ StoreForAgainstDetails(Thisgame, StatsFor,TeamPositionFor) }

        if(TeamPositionAgainst === -1){ StoreForAgainstDetails(Thisgame, StatsAgainst, StoreNew(Thisgame, StatsAgainst,"Opposition","OppositionID").length-1) }
        else{ StoreForAgainstDetails(Thisgame, StatsAgainst,TeamPositionAgainst) }
    })

  //  console.log(StatsFor,StatsAgainst);
    store.dispatch({ type:"SET_STATS_FOR", payload:StatsFor });
    store.dispatch({ type:"SET_STATS_AGAINST", payload:StatsAgainst });
}