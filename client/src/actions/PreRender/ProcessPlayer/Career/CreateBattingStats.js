/* eslint-disable */
// Functions
    // Math
    import {Add,FindDucks,BattingAvg,BattingSR} from "../../../Math/index"
    var _ = require('lodash');

export default function CreateBatting(){
        
        this.BattingObj=[]

        this.ScoreBrackets=[
            ["s_10",11,0], 
            ["s_20",30,19],
            ["s_30",40,29],
            ["s_40",50,39],
            ["s_50",99,49], 
            ["s_100",500,99]
        ]

        this.Start = (ProcessGames)=>{

            ProcessGames.map((Game,i)=>{
                let B = Game.Batting;
                let Obj = this.BattingObj;

                // ADD
                B ? Obj.runs =       Add(Obj.runs, parseInt(B.RunInt,10)) : null
                B ? Obj.ballsFaced = Add(Obj.ballsFaced, B.BallsFacedInt) : null
                B ? Obj.innings =    Add(Obj.innings,1) : null
                B ? Obj.notOut =     Add(Obj.notOut, B.NotOut) : null

                // Scores
                B ? Obj.ducks =  FindDucks(Obj.ducks,Game.Batting.RunInt,Game.Batting.NotOut) : null
                B ?  this.CreateScoreBrackets(B.RunInt) :null
                
                // Equations
                B ? Obj.average  =    BattingAvg(Obj.runs,Obj.innings,Obj.notOut) : null
                B ? Obj.strikeRate =  BattingSR(Obj.runs,Obj.ballsFaced) : null
                B ? (B.RunInt > Obj.hs) ? Obj.hs = B.RunInt : null : null
                B ? this.BattingOverTheYears(Game) : null

                return true
            })
        }
        
        this.CreateScoreBrackets = (Runs)=>{
            this.ScoreBrackets.map((val,i)=>{
                if(Runs < val[1] && Runs > val[2]){
                    this.BattingObj[val[0]] = this.BattingObj[val[0]]+1
                }
            })
        }

        this.BattingOverTheYears =(Game)=>{

            let ObjYear = this.BattingObj.overTheYears
            let from = Game.Meta.Date.split("/");
            let findKey = _.findKey(ObjYear, { 'int': '20'+from[2]});

            if(findKey === undefined){
                ObjYear.push(
                                {
                                    "int":'20'+from[2],
                                    "Month":[from[1]],
                                    "TotalRuns":Game.Batting.RunInt, 
                                    "TotalBF":Game.Batting.BallsFacedInt,
                                    "HistoryGames":[Game.Meta.Fixture],
                                    "HistoryRuns":[Game.Batting.RunsValue],
                                    "NotOuts":Game.Batting.NotOut,
                                    "AVG":BattingAvg(Game.Batting.RunInt,1,1),
                                    "SR":BattingSR(Game.Batting.RunInt,Game.Batting.BallsFacedInt)
                                }
                        );
               }
               else{
                    // Batting
                    ObjYear[findKey].TotalRuns = Add(ObjYear[findKey].TotalRuns, Game.Batting.RunInt)
                    ObjYear[findKey].TotalBF = Add(ObjYear[findKey].TotalBF,Game.Batting.BallsFacedInt)
                    ObjYear[findKey].NotOuts = Add(ObjYear[findKey].NotOuts,Game.Batting.NotOut)
                    ObjYear[findKey].HistoryRuns.push(Game.Batting.RunsValue)
                    ObjYear[findKey].AVG = BattingAvg(ObjYear[findKey].TotalRuns,ObjYear[findKey].HistoryRuns.length, ObjYear[findKey].NotOuts)
                    ObjYear[findKey].SR = BattingSR(ObjYear[findKey].TotalRuns,ObjYear[findKey].TotalBF)
                    
                    // Meta
                    ObjYear[findKey].HistoryGames.push(Game.Meta.Fixture)
                    ObjYear[findKey].Month.push(from[1])
               }
       }
}