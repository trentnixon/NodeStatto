/* eslint-disable */
// Functions
    // Math
    import {Add} from "../../../Math/index"
    var _ = require('lodash');

export default function CreateKeeping(){

    this.KeepingObj=[]
    this.Start=(ProcessGames)=>{

        ProcessGames.map((Game,i)=>{
            let K = Game.Keeping;
            
            K ? this.KeepingObj.catches = Add(this.KeepingObj.catches, parseInt(Game.Keeping.catches,10)) : null
            K ? this.KeepingObj.stumping = Add(this.KeepingObj.stumping, parseInt(Game.Keeping.stumping,10)) : null
            K ? this.KeepingObj.innings = Add(this.KeepingObj.innings,1) : null
            K ? this.KeepingOverTheYears(Game) : null
            return true
        });

    }
    this.KeepingOverTheYears = (Game)=>{
        
        let ObjYear = this.KeepingObj.overTheYears;
        let from = Game.Meta.Date.split("/");
        let findKey = _.findKey(ObjYear, { 'int': '20'+from[2]});

        if(findKey === undefined){
            ObjYear.push(
                {
                    "int":'20'+from[2],
                    "Month":[from[1]],
                    "HistoryGames":[Game.Meta.Fixture],
                    "TotalCaught":Game.Keeping.catches,
                    "CaughtARR":[Game.Keeping.catches],
                    "TotalStumping":Game.Keeping.stumping,
                    "StumpingARR":[Game.Keeping.stumping]
                    
                });
           }
           else{
               // Keeping
               ObjYear[findKey].TotalCaught = ObjYear[findKey].TotalCaught + Game.Keeping.catches
               ObjYear[findKey].CaughtARR.push(Game.Keeping.catches)
               ObjYear[findKey].TotalStumping = ObjYear[findKey].TotalStumping + Game.Keeping.stumping
               ObjYear[findKey].StumpingARR.push(Game.Keeping.stumping)

                // Meta
                ObjYear[findKey].HistoryGames.push(Game.Meta.Fixture)
                ObjYear[findKey].Month.push(from[1])
           }
    }
}