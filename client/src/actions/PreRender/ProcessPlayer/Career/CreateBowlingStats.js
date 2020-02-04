/* eslint-disable */
// Functions
    // Math
    import {Add,BowlingEconomy,BowlingSR,BowlingAverage} from "../../../Math/index"
    var _ = require('lodash');

export default function CreateBowling(){

    this.BowlingObj=[]

    this.Fas=[
        ["fa2",2],
        ["fa3",3],
        ["fa4",4],
        ["fa5",5],
        ["fa6",6],
        ["fa7",7]
    ]

    this.Start=(ProcessGames)=>{

        ProcessGames.map((Game,i)=>{
            let B = Game.Bowling;
            let Obj = this.BowlingObj;

            B ? Obj.wickets =  Add(Obj.wickets, parseInt(B.Wickets,10)) :null
            B ? Obj.innings =  Add(Obj.innings,1) : null
            B ? Obj.ob      =  Add(Obj.ob, parseInt(B.OversInt,10)) :null
            B ? Obj.rc      =  Add(Obj.rc, parseInt(B.Runs,10)):null
            B ? Obj.economy =  BowlingEconomy(Obj.rc,Obj.ob) :null
            B ? Obj.sr =  BowlingSR(Obj.ob,Obj.wickets) : null
            B ? Obj.average =  BowlingAverage(Obj.rc,Obj.wickets) : null
            B ? this.CreateFas(B.Wickets) :null
            B ? this.BowlingOverTheYears(Game) : null

            return true
        })
    }
    this.CreateFas = (Wickets)=>{
        
        this.Fas.map((val,i)=>{
            if(parseInt(Wickets,10) === val[1]){
                this.BowlingObj[val[0]] = this.BowlingObj[val[0]]+1
            }
        })
    }
    this.BowlingOverTheYears =(Game)=>{
        let ObjYear = this.BowlingObj.overTheYears
        let from = Game.Meta.Date.split("/");
        let findKey = _.findKey(ObjYear, { 'int': '20'+from[2]});

        if(findKey === undefined){
            ObjYear.push(
                        {
                            "int":'20'+from[2],
                            "Month":[from[1]],
                            "HistoryGames":[Game.Meta.Fixture],
                            "TotalOB":Game.Bowling.OversInt,
                            "TotalRC":parseInt(Game.Bowling.Runs,10),
                            "TotalWickets":parseInt(Game.Bowling.Wickets,10),
                            "HistoryWickets":[parseInt(Game.Bowling.Wickets,10)],
                            "HistoryRC":[parseInt(Game.Bowling.Runs,10)],
                        }
                    );
           }
           else{
                    // Bowling
                    ObjYear[findKey].TotalOB = ObjYear[findKey].TotalOB + Game.Bowling.OversInt
                    ObjYear[findKey].TotalRC = ObjYear[findKey].TotalRC + parseInt(Game.Bowling.Runs,10)
                    ObjYear[findKey].TotalWickets = ObjYear[findKey].TotalWickets + parseInt(Game.Bowling.Wickets,10)
                    ObjYear[findKey].HistoryRC.push(parseInt(Game.Bowling.Runs,10))
                    ObjYear[findKey].HistoryWickets.push(parseInt(Game.Bowling.Wickets,10))
                    // Meta
                    ObjYear[findKey].HistoryGames.push(Game.Meta.Fixture)
                    ObjYear[findKey].Month.push(from[1])
           }
    }
}