/* eslint-disable */
import {LoginSequence as LS, LoginSequence as DS} from "../LoginSequencing/PrivateFunctions";

// Functions
    // Math
    import {Add, BattingAvg, BattingSR,BowlingEconomy,BowlingSR,BowlingAverage} from "../../../Math/index"
    var _ = require('lodash');
// Utils   
 //   var _ = require('lodash');

export default function CreateForAganist(){

    this.Clean=null
    this.Completed =false
    this.ForAganist ={ For:[],Against:[] }

    this.Start =()=>{

        console.log("FOR AND AGAINST STARTED") 

        this.Clean.map((Game ,i)=>{
            
            // Create Position in Array
            this.Position("For", Game, "TeamID", "Team")
            this.Position("Against", Game, "OppositionID", "Opposition") 
            
            // Include Deets
            this.IncludeDetails ("For", this.Position("For", Game, "TeamID", "Team"),Game)
            this.IncludeDetails ("Against", this.Position("Against", Game, "OppositionID", "Opposition"),Game)
         
            return true;
        })

        this.Store();
    }

    /********* COMPLETE THIS FUNCTION   *************************** */
    this.IncludeDetails = (Type,Pos,Game)=>{ 

        let ObjKey = this.ForAganist[Type][Pos];
        let A = Game.Batting;
        let B = Game.Bowling;
        let C = Game.Keeping;
       
       // console.log(Game)
        
        // Meta
        ObjKey.Games = Add(ObjKey.Games,1);
       
        // Batting
        A ? ObjKey.Innings = Add(ObjKey.Innings,1) : null
        A ? ObjKey.Runs = Add(ObjKey.Runs,Game.Batting.RunInt) : null
        A ? ObjKey.BF = Add(ObjKey.BF,Game.Batting.BallsFacedInt) : null
        A ? ObjKey.NO = Add(ObjKey.NO,Game.Batting.NotOut) : null
        A ? ObjKey.AVG = BattingAvg(ObjKey.Runs,ObjKey.Innings,ObjKey.NO) : null
        A ? ObjKey.SR =  BattingSR(ObjKey.Runs,ObjKey.BF) : null
       
        // Bowling

        B ? ObjKey.Wickets      =  Add(ObjKey.Wickets,parseInt(Game.Bowling.Wickets,10)) : null
        B ? ObjKey.Overs        =  Add(ObjKey.Overs,Game.Bowling.OversInt) : null
        B ? ObjKey.RunsConceded =  Add(ObjKey.RunsConceded,parseInt(Game.Bowling.Runs,10)) : null

        B ? ObjKey.ECO      =  BowlingEconomy(ObjKey.RunsConceded,ObjKey.Overs) : null
        B ? ObjKey.BOWLAVG  =  BowlingAverage(ObjKey.RunsConceded,ObjKey.Wickets) : null
        B ? ObjKey.BOWLSR   =  BowlingSR(ObjKey.Overs,ObjKey.Wickets) : null
        
        // Keeping

        C ? ObjKey.CaughtBehind =  Add(ObjKey.CaughtBehind,Game.Keeping.catches) : null
        C ? ObjKey.Stumpings    =  Add(ObjKey.Stumpings,Game.Keeping.stumping) : null
     

    }
 
    this.Position = (Obj,Game, Type, Team)=>{
        let Position = this.FindIndex(this.ForAganist[Obj], Game.Meta[Type]);
        if(Position === -1){ return this.CreateNewTeamItem(this.ForAganist[Obj],Game,Type,Team)}
        else{  return Position }
    }

    this.FindIndex = (Obj, ID)=>{ return  _.findIndex(Obj, function(o) { return o.ID === ID; }); }

    this.CreateNewTeamItem = (Obj,Game, Type, Team)=>{
        Obj.push( {
            "Team":Game.Meta[Team],
            "ID":Game.Meta[Type],
            "Games":0,
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
            "CaughtBehind":0,
            "Stumpings":0,
            "OvertheYears":[]
        })
        return Obj.length;
    }
    this.Store = ()=>{

       console.log("FOR AND AGAINST STORED");
       DS([ { Type:"DATA_STORE_PRIMARY_FORAGAINST", Value:this.ForAganist},]);
       LS([ { Type:"DATA_SET_FORAGAINST", Value:true},
            {Type:'LOGINSEQUENCE_STAGE4',  Value:true},
        ]);

        this.Completed = true;
    }
}