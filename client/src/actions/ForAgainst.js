import {LoginSequence} from "./PrivateFunctions";
//import {CalculateBatting} from "./CalculateStats"
//const Batting = new CalculateBatting();

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
     //console.log(thisGame)
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
        if(thisGame['Bowling']){
            ObjKey.ECO = (ObjKey.RunsConceded/ObjKey.Overs).toFixed(2);
            ObjKey.BOWLAVG = (ObjKey.RunsConceded / ObjKey.Wickets).toFixed(2);
            ObjKey.BOWLSR = ((ObjKey.Overs * 5) /ObjKey.Wickets).toFixed(2)
        }
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
            "RunsConceded":0,
            "ECO":0,
            "BOWLAVG":0,
            "BOWLSR":0,
            "OvertheYears":[]
        }
    )

    return StatsFor;
}

export function ForAgainst(data){

    console.log("FOR AND AGAINST STARTED") 
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

    //console.log(StatsFor,StatsAgainst)
    //store.dispatch({ type:"STORE_FOR", payload:StatsFor });
    //store.dispatch({ type:"STORE_AGAINST", payload:StatsAgainst });
    //store.dispatch({ type:"DATA_SET_FORAGAINST", payload:true}); 
    
    LoginSequence([
        { Type:"DATA_STORE_PRIMARY_FOR", Value:StatsFor},
        { Type:"DATA_STORE_PRIMARY_AGAINST", Value:StatsAgainst },
        { Type:"DATA_SET_FORAGAINST", Value:true},
        {Type:'LOGINSEQUENCE_STAGE4',  Value:true},
    ]);
    console.log("FOR AND AGAINST STORED")
}