import {LoginSequence} from "./PrivateFunctions";
var _ = require('lodash');



export function FormGuide(data){

    //console.log("FORM GUIDE STARTED")
    data.reverse()
    let Stats={};
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
                    Keeping:[],
                    Combined:[{
                        ThisDate:null,
                        Fixture: 0,
                        FixtureInt: 0,
                        Bowling : 0,
                        Batting : 0,
                        Keeping :0
                    }
                    ]
                }
            },
            batting:{
                    runs:0,
                    ballsFaced:0,
                    innings:0,
                    average:0,
                    strikeRate:0,
                    hs:0,
                    notOut:0,
                    ducks:0,
                    s_10:0,
                    s_20:0,
                    s_30:0,
                    s_40:0,
                    s_50:0,
                    s_100:0,
                    overTheYears:[]
            },
            bowling:{
                wickets:0,
                innings:0,
                ob:0,
                rc:0,
                economy:0,
                average:0,
                sr:0,
                fa2:0,
                fa3:0,
                fa4:0,
                fa5:0,
                fa6:0,
                fa7:0,
                overTheYears:[]
            },
            Keeping:{
                catches:0,
                stumping:0,
                overTheYears:[]
            }
        },
        Form:{
            Meta:{
                Games:{
                    int:0,
                    history:[]
                }
            },
            batting:{
                runs:0,
                ballsFaced:0,
                innings:0,
                average:0,
                strikeRate:0,
                hs:0,
                notOut:0,
                    ducks:0,
                    s_10:0,
                    s_20:0,
                    s_30:0,
                    s_40:0,
                    s_50:0,
                    s_100:0,
            },
            bowling:{
                wickets:0,
                innings:0,
                ob:0,
                rc:0,
                economy:0,
                average:0,
                sr:0,
                fa2:0,
                fa3:0,
                fa4:0,
                fa5:0,
                fa6:0,
                fa7:0,
            },
            Keeping:{
                catches:0,
                stumping:0
            }
        }
    };

    //console.log(Stats);

    // Lets create a form guide
     // eslint-disable-next-line
    data.map((game,i)=>{
         
            //console.log(game);
            // eslint-disable-next-line
            let Meta = Stats.Career.Meta;
            // eslint-disable-next-line
            let Batting = Stats.Career.batting;
            // eslint-disable-next-line
            let Bowling = Stats.Career.bowling;
            // eslint-disable-next-line
            let Keeping = Stats.Career.Keeping;

            // Meta
            if(game.Meta){ 
                Meta = IncludeMeta(Meta,game);
                Meta.Rankings.Combined = CombinedRanking(Meta.Rankings.Combined,game)

                //console.log(Meta.Rankings.Combined);
            }
            // Batting
            if(game.Batting){
                Batting = IncludeBatting(Batting,game);
                // Ranking
                Meta.Rankings.Batting =  rankingPush(Meta.Rankings.Batting, parseInt(game.Batting.Ranking,10),game.Meta.Date)
            }
            // Bowling
            if(game.Bowling){
                Bowling = IncludeBowling(Bowling, game)
                // Ranking
               //console.log(game.Bowling.Ranking)
                Stats.Career.Meta.Rankings.Bowling =  rankingPush(Stats.Career.Meta.Rankings.Bowling, parseInt(game.Bowling.Ranking,10),game.Meta.Date)
            }
            // Keeping
            if(game.Keeping){
                Keeping =IncludeKeeping(Keeping, game)
                Stats.Career.Meta.Rankings.Keeping =  rankingPush(Stats.Career.Meta.Rankings.Keeping, parseInt(game.Keeping.Ranking,10),game.Meta.Date)
            }
    });
    
    // Create Form Guide

    // eslint-disable-next-line
    data.slice(Math.max(data.length - 5, 1)).map((game,i)=>{

         // eslint-disable-next-line
        let Meta = Stats.Form.Meta;
        // eslint-disable-next-line
        let Batting = Stats.Form.batting;
        // eslint-disable-next-line
        let Bowling = Stats.Form.bowling;
        // eslint-disable-next-line
        let Keeping = Stats.Form.Keeping;

        if(game.Meta){ Meta = IncludeMeta(Meta,game);}
        if(game.Batting){ Batting = IncludeBatting(Batting,game);}
        if(game.Bowling){Bowling = IncludeBowling(Bowling, game)}
        if(game.Keeping){Keeping =IncludeKeeping(Keeping, game)}
    })


        //console.log(Stats);

        LoginSequence([
            { Type:"DATA_STORE_PRIMARY_CAREER", Value:Stats},
            { Type:"DATA_SET_LOAD_CAREER", Value:true}
        ]);

        console.log("FORM GUIDE STORED") 

    return true;
}



// Core Section Functions

// Meta
function IncludeMeta(Meta, game){
    
    Meta.Games.int = Add(Meta.Games.int, 1)
    Meta.Games.history = GameHistory(Meta.Games.history,game.Meta)

    return Meta
}

 
function IncludeBatting(Batting, game){

    Batting.runs = Add(Batting.runs, parseInt(game.Batting.RunInt,10));
    Batting.ballsFaced =   Add(Batting.ballsFaced, game.Batting.BallsFacedInt);
    Batting.innings =   Add(Batting.innings,1);
    Batting.notOut =   Add(Batting.notOut, game.Batting.NotOut);
    
    Batting.ducks =  CountDucks(Batting.ducks,game.Batting.RunInt,game.Batting.NotOut);
    Batting.s_10 =  CountScores(Batting.s_10,game.Batting.RunInt,11,0);
    Batting.s_20 =  CountScores(Batting.s_20,game.Batting.RunInt,30,19);
    Batting.s_30 =  CountScores(Batting.s_30,game.Batting.RunInt,40,29);
    Batting.s_40 =  CountScores(Batting.s_40,game.Batting.RunInt,50,39);
    Batting.s_50 =  CountScores(Batting.s_50,game.Batting.RunInt,99,49);
    Batting.s_100 =  CountScores(Batting.s_100,game.Batting.RunInt,200,99);


    Batting.average =   (Batting.runs/(Batting.innings-Batting.notOut)).toFixed(2);
    Batting.strikeRate =  (Batting.runs/Batting.ballsFaced*100).toFixed(2);
    if(game.Batting.RunInt > Batting.hs){ Batting.hs = game.Batting.RunInt; }
    
    if(Batting.overTheYears !== undefined){
        Batting.overTheYears = RunOverTheYears(Batting.overTheYears,game);
    }
 

    return Batting
}


function IncludeBowling(Bowling, game){

    Bowling.wickets =  Add(Bowling.wickets, parseInt(game.Bowling.Wickets,10)) 
    Bowling.innings =   Add(Bowling.innings,1);
    Bowling.ob =  Add(Bowling.ob, parseInt(game.Bowling.OversInt,10))
    Bowling.rc =  Add(Bowling.rc, parseInt(game.Bowling.Runs,10))
    Bowling.economy =  (Bowling.rc/Bowling.ob).toFixed(2)
    Bowling.sr =  ((Bowling.ob * 5) /Bowling.wickets).toFixed(2)
    Bowling.average =  (Bowling.rc / Bowling.wickets).toFixed(2)
    Bowling.fa2 =  BowlingFas(Bowling.fa2, parseInt(game.Bowling.Wickets,10),2)
    Bowling.fa3 =  BowlingFas(Bowling.fa3, parseInt(game.Bowling.Wickets,10),3)
    Bowling.fa4 =  BowlingFas(Bowling.fa4, parseInt(game.Bowling.Wickets,10),4)
    Bowling.fa5 =  BowlingFas(Bowling.fa5, parseInt(game.Bowling.Wickets,10),5)
    Bowling.fa6 =  BowlingFas(Bowling.fa6, parseInt(game.Bowling.Wickets,10),6)
    Bowling.fa7 =  BowlingFas(Bowling.fa7, parseInt(game.Bowling.Wickets,10),7)
    

    if(Bowling.overTheYears !== undefined){
        Bowling.overTheYears = BowlingOverTheYears(Bowling.overTheYears,game);
    }
    return Bowling;
}

function IncludeKeeping(Keeping, game){
    Keeping.catches = Add(Keeping.catches, parseInt(game.Keeping.catches,10))
    Keeping.stumping = Add(Keeping.stumping, parseInt(game.Keeping.stumping,10))

    return Keeping;
}
 

// Supplimentaly Functions

function Add(data,value){  if(!isNaN(value)){ return (data+value);}else{ return data}  }

function isRankingTrue(value,Item,row,Combined){
    
    // value[Item] eg Game.Batting
    let CheckRow = value[Item];
  
    // Check is Row is there
    if(CheckRow){
        let Rank= parseInt(CheckRow[row],10);
        // If row Int is a number 
        if(!isNaN(Rank)){
            return parseInt(CheckRow[row],10);
        }else{
            return Combined[Combined.length-1][Item];
        }
    }
    else{
        return Combined[Combined.length-1][Item];
    }
   
}

function rankingPush(data,value,date){ 
    let year = date.split('/');
    if(!isNaN(value)){ 
            data.push(
                {
                    rank:value,
                    date:'20'+year[2]
                }
            );
    }
    return data
}

function CombinedRanking(Combined,game){


            Combined.push({
                ThisDate:game.Meta.Date,
                Fixture: game.Meta.Fixture,
                FixtureInt: game.Meta.FixtureInt,
                Bowling : isRankingTrue(game,'Bowling','Ranking',Combined),
                Batting : isRankingTrue(game,'Batting','Ranking',Combined),
                Keeping : isRankingTrue(game,'Keeping','Ranking',Combined)
            })

            //console.log(Combined)
    return Combined;
}

function CountScores(data,stack,needle,variant){
    //console.log(stack,needle)   
    if(stack<needle && stack>variant){  data = data+1 ; }
    return data;
}

function CountDucks(data,needle,variant){
    if(needle === 0){ 
       
        if(variant ===0){
            data=data+1;
        }
    }
    return data;
}

function BowlingFas(data,wickets, variant){
   //console.log(wickets, variant)
    if(wickets === variant){data = data+1}
    return data;
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
               //console.log(value[FixturePosition].Int)
                value[FixturePosition].Int = Add(value[FixturePosition].Int, 1)
        }

     //console.log(value)
        return value;
}


function RunOverTheYears(data,game){
    
   //console.log(game);
    let from = game.Meta.Date.split("/");
    let findKey;

   findKey = _.findKey(data, { 'int': '20'+from[2]});
     
   if(findKey === undefined){
          
    data.push(
                    {
                        "int":'20'+from[2],
                        "Month":[from[1]],
                        "TotalRuns":game.Batting.RunInt, 
                        "TotalBF":game.Batting.BallsFacedInt,
                        "HistoryGames":[game.Meta.Fixture],
                        "HistoryRuns":[game.Batting.RunsValue],
                        "NotOuts":game.Batting.NotOut
                    }
            );
   }
   else{
        //console.log(findKey)
            // Batting
            data[findKey].TotalRuns = data[findKey].TotalRuns + game.Batting.RunInt
            data[findKey].TotalBF = data[findKey].TotalBF + game.Batting.BallsFacedInt
            data[findKey].NotOuts = data[findKey].NotOuts + game.Batting.NotOut
            data[findKey].HistoryRuns.push(game.Batting.RunsValue)
            // Meta
            data[findKey].HistoryGames.push(game.Meta.Fixture)
            data[findKey].Month.push(from[1])
   }
    
     return data

}


function BowlingOverTheYears(data,game){
    
    console.log(game); 

    let from = game.Meta.Date.split("/");
    let findKey;

   findKey = _.findKey(data, { 'int': '20'+from[2]});
     
   if(findKey === undefined){
          
    
    data.push(
                    {
                        "int":'20'+from[2],
                        "Month":[from[1]],
                        "HistoryGames":[game.Meta.Fixture],
                        "TotalOB":game.Bowling.OversInt,
                        "TotalRC":parseInt(game.Bowling.Runs,10),
                        "TotalWickets":parseInt(game.Bowling.Wickets,10),
                        "HistoryWickets":[parseInt(game.Bowling.Wickets,10)],
                        "HistoryRC":[parseInt(game.Bowling.Runs,10)],
                    }
            );
   }
   else{
            // Bowling
            data[findKey].TotalOB = data[findKey].TotalOB + game.Bowling.OversInt
            data[findKey].TotalRC = data[findKey].TotalRC + parseInt(game.Bowling.Runs,10)
            data[findKey].TotalWickets = data[findKey].TotalWickets + parseInt(game.Bowling.Wickets,10)
            data[findKey].HistoryRC.push(parseInt(game.Bowling.Runs,10))
            data[findKey].HistoryWickets.push(parseInt(game.Bowling.Wickets,10))

            // Meta
            data[findKey].HistoryGames.push(game.Meta.Fixture)
            data[findKey].Month.push(from[1])
   }

     return data

}
