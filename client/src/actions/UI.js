import store from "../store/index"
//import { Route } from 'react-router-dom'
//var _ = require('lodash');

export function UXDrawer(value){
    store.dispatch({ type:"MobileDrawerState", payload:value});
} 

export function ISMOBILE(value){
    store.dispatch({ type:"ISMOBILE", payload:value});
}

export function Form_Select_Year(value){
    store.dispatch({ type:"SELECT_YEAR", payload:value}); 
}
export function Form_Select_League(value){
    console.log(value)
    store.dispatch({ type:"SELECT_LEAGUE", payload:value});
}

export function TeamName(ID){
    let TeamName = store.getState().DATA.SetUpData.GoogleTeamList
    let ReturnName;
     TeamName.map((team,i)=>{
            if(team[1] === ID){
                ReturnName= team[0];
            }
            return true;
    })

    return ReturnName;
   
}

/**
 * 
 *  This function seporates Game date by a Date provided as a Needle
 *  if Needle === Career then the full data set is sent back
 *  
 */
export function FindDataSeries(DATA,Needle){
    let Series=[];
    if(Needle === "Career"){
        return DATA
    }else{
        DATA.map((game,i)=>{
           let NewYear = game.Meta.Date.split("/")
           if(Needle === '20'+NewYear[2]){
                Series.push(game)
            }
            return true;
        })
        return Series;
    }
}



// Filter Options
// Filter on Year
function YearFilter(DATA,Year){
    let Series=[]
        DATA.map((game,i)=>{
                if(game.Meta.Year == parseFloat(Year))
                    {
                        Series.push(game)
                    }
        })
        console.log(Series)
    return Series;
}
// Filter on LW

function LWFilter(DATA,LW){
    let Series=[]
        DATA.map((game,i)=>{
                if(game.Meta.LW == parseFloat(LW))
                    {
                        Series.push(game)
                    }
        })

        console.log(Series)
    return Series;
}
// Filter on Both

function FilterSeries(DATA,Filter){
    let Series = DATA.filter(function(item) {
        for (var key in Filter) {
              if (item.Meta[key] === undefined || item.Meta[key] != Filter[key])
               return false;
        }
        return true;
      });

      console.log(Series)
   return Series;
}

export function FilterDataSeries(DATA,Filter){
    if(Filter.Year === 'Career' && parseFloat(Filter.LW) === 0){ return DATA; }
    else if(Filter.Year === 'Career'){ return LWFilter(DATA,Filter.LW ) }
    else if(parseFloat(Filter.LW) === 0){ return YearFilter(DATA,Filter.Year )}
    else if(Filter.Year != 'Career' && Filter.LW != 0){ return FilterSeries(DATA,Filter) }
}

/**
 * 
 *  This function Creates the Data Labesl for Grapghs for the function above
 *  if Needle === Career then the full data set is sent back
 *  
 */
export function CreateLabelData(Data,Needle){
    let Series=[],NewYear;
    Data.map((game,i)=>{
        NewYear = game.Meta.Date.split("/")
        if(Needle === "Career"){ Series.push(game.Meta.Date) }
        else if(Needle === '20'+NewYear[2]){ Series.push(game.Meta.Date) }
        return true;
    })
    return Series;
}


export function LW(props){
   let Weight=[]
    props.map((lw,i)=>{
           
            if(Weight.indexOf(lw.Meta.LW) === -1){
                Weight.push(lw.Meta.LW)
            }
           
            
    });
   // _.orderBy(Weight, [function(o) { return o.Int; }],['desc']);
    return Weight.sort();
}

// Set the page Titles
export function SetPageTitle(){

    let PlayerName = store.getState().DATA.SelectedPlayer.Primary.Meta.Name
    let Section = window.location.pathname.split('/')
    Section.splice(0,3)
    let str='';
    Section.map((path,i)=>{
                str = str.concat(path.toUpperCase(),' | ');
                return true;
        })
    document.title = PlayerName + ' | ' + str;
}

// UI calculations


export function BattingBasics(DATA){ 
    let RUNS=[],SR=[],AVG=[],BALLS=[],DUCK=[],Fif=[],NO=[], OPPO=[], Games=[],TEAM=[];
    let AVERAGE, STRIKERATE;
    DATA.map((game,i)=>{ 
        //console.log(game)
         if(game.Batting){ 
                // Innings
                Games.push(1);

                // RUNS
                RUNS.push(game.Batting.RunInt)
                BALLS.push(game.Batting.BallsFacedInt)
                OPPO.push(game.Meta.Opposition)
                TEAM.push(game.Meta.Team)
                
                if(game.Batting.NotOut === 1){ NO.push(1)}
             
                // Average
                AVERAGE=(RUNS.reduce((a, b) => a + b, 0)/(Games.length - NO.length)).toFixed(2);
                if(isFinite(AVERAGE)){ AVG.push(AVERAGE) }
                else{ AVG.push(0) }

                // SR
                STRIKERATE = (RUNS.reduce((a, b) => a + b, 0)/BALLS.reduce((a, b) => a + b, 0)*100).toFixed(2); // SR
                SR.push(STRIKERATE)

                // Scores
                if(game.Batting.RunInt === 0 && game.Batting.NotOut === 0){DUCK.push(1)}
                if(game.Batting.RunInt > 49 ){Fif.push(1)}
         }
         return true;
     }) 

     
     let AvgVar = (Games.length - NO.length);
     //console.log(Games.length, NO.length, AvgVar)
     if(AvgVar === 0 ){AvgVar=1}
     
     return [
        Games.length,                       //  0   Inning Count
        OPPO,                               //  1   OPPO ARR
        TEAM,                               //  2   TEAM ARR
        RUNS,                               //  3   RUNS ARR
        RUNS.reduce((a, b) => a + b, 0),    //  4   Sum of RUNS
        Math.max(...RUNS),                 //  5   HS in ARR
        Math.min(...RUNS),                 //  6   LS in ARR
        AVG,                                //  7   AVG ARR
        (RUNS.reduce((a, b) => a + b, 0)/AvgVar).toFixed(2),    //  8   GLOBAL AVG
        BALLS,                              //  9   BF ARR
        BALLS.reduce((a, b) => a + b, 0),   //  10 BALL FACED TOTAL
        SR,                                 //  11  SR ARR
        (RUNS.reduce((a, b) => a + b, 0)/BALLS.reduce((a, b) => a + b, 0)*100).toFixed(2),  //  12  SR
        Fif.length,                         //  13  50s
        DUCK.length,                        //  14  0s
        NO.length                           //  15  Notouts
    ]
}

export function BattingMileStones(DATA, CLEAN){ 

    //console.log(DATA, (Math.ceil(DATA.s_50/100)*100) );

    // 

    return [
        DATA.runs,                                                  // 0 Current Runs
        (Math.ceil(DATA.runs/1000)*1000),                           // 1 Next Milestone Runs
        ( (Math.ceil(DATA.runs/1000)*1000) - DATA.runs ),           // 2 Difference
        DATA.s_50,                                                  // 3 Current 50s
        (Math.ceil(DATA.s_50/100)*100),                             // 4 Next Milestone 50s
        ( (Math.ceil(DATA.s_50/100)*100) - DATA.s_50 ),             // 5 Difference
        DATA.ballsFaced,                                            // 6 Current 50s
        (Math.ceil(DATA.ballsFaced/1000)*1000),                     // 7 Next Milestone 50s
        ( (Math.ceil(DATA.ballsFaced/1000)*1000) - DATA.ballsFaced ),    // 8 Difference
        DATA.innings,                                            // 9 Current 50s
        (Math.ceil(DATA.innings/100)*100),                     // 10 Next Milestone 50s
        ( (Math.ceil(DATA.innings/100)*100) - DATA.innings ),    // 11 Difference
        DATA.notOut,                                            // 12 Current 50s
        (Math.ceil(DATA.notOut/100)*100),                     // 13 Next Milestone 50s
        ( (Math.ceil(DATA.notOut/100)*100) - DATA.notOut ),    // 14 Difference
        DATA.ducks,                                            // 12 Current 50s
        (Math.ceil(DATA.ducks/100)*100),                     // 13 Next Milestone 50s
        ( (Math.ceil(DATA.ducks/100)*100) - DATA.ducks )    // 14 Difference
        
    ]
}



export function BowlingMileStones(DATA){ 

    // console.log(DATA, (Math.ceil(DATA.s_50/100)*100) );

    return [
        DATA.innings,                                                  // 0 Current innings
        (Math.ceil(DATA.innings/100)*100),                           // 1 Next Milestone innings
        ( (Math.ceil(DATA.innings/100)*100) - DATA.innings ),           // 2 Difference
        DATA.ob,                                                  // 3 Current ob
        (Math.ceil(DATA.ob/100)*100),                             // 4 Next Milestone ob
        ( (Math.ceil(DATA.ob/100)*100) - DATA.ob ),             // 5 Difference
        DATA.rc,                                            // 6 Current rc
        (Math.ceil(DATA.rc/500)*500),                     // 7 Next Milestone rc
        ( (Math.ceil(DATA.rc/500)*500) - DATA.rc ),    // 8 Difference
        DATA.wickets,                                            // 9 Current wickets
        (Math.ceil(DATA.wickets/100)*100),                     // 10 Next Milestone wickets
        ( (Math.ceil(DATA.wickets/100)*100) - DATA.wickets ),    // 11 Difference
        DATA.fa2,                                            // 12 Current fa2
        (Math.ceil(DATA.fa2/50)*50),                     // 13 Next Milestone fa2
        ( (Math.ceil(DATA.fa2/50)*50) - DATA.fa2 ),    // 14 Difference
        
    ]
}



export function FormFactor(FORM,CAREER){ 


        let FetchForm = BattingBasics(FORM)

        //console.log(FetchForm);

        let  Multiplier = (FetchForm[8]/CAREER.batting.average)*(FetchForm[12]/CAREER.batting.strikeRate)
        let Career100 = ((CAREER.batting.average*CAREER.batting.strikeRate)/100).toFixed(1)
        let Form100 =(Career100*Multiplier.toFixed(2)).toFixed(1)
        let Diff = (Form100 - Career100).toFixed(1)
       
 
        return[
            Multiplier.toFixed(2),
            Career100,
            Form100,
            Diff
        ]
}



export function FormoverTime(CLEAN,CAREER, SELECTOR){


 
    /**
     * 
     *  Changes to this alog
     *  Create NEW Meta stats to use as a Benchmark
     *  Currently using Carrer Meta, which is very limiting. 
     *  var CAREER should be dynamic based on year selected
     *  var FORM will be limited by the Global YEAR var as well
     *  Then pass through the below eq
     */



    const monthNames = [null,"January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];

    // Orgainse Career by Year
    let ByYear = CLEAN.reduce((acc, item) => { 
          
        if (!acc[item.Meta.Year]) {
            acc[item.Meta.Year] = [];
            }
      
         acc[item.Meta.Year].push(item);
            return acc;
      }, {})


      // Sort Years into Months 
      let Create=[];
      let FormBar=[]
      let FormLabels=[]

      Object.keys(ByYear).map((year,i)=>{

        let PASSING = ByYear[year].reduce((acc, item) => {
                if (!acc[item.Meta.Month]) {
                  acc[item.Meta.Month] = [];
                }
              
                acc[item.Meta.Month].push(item);
                return acc;
              }, {})
              Create[year]=PASSING
              return true;
      })

       let FilteredList = [];
      if( SELECTOR !== 'Career'){
        FormLabels=[]
        //console.log( Create[SELECTOR] );
        FilteredList[SELECTOR] = Create[SELECTOR]
      }
      else{
        FilteredList = Create
      }

     
      FilteredList.map((year,i)=>{
            Object.keys(year).map((month,t)=>{
                    let v = FormFactor(year[month],CAREER)[3];
                    if(!isNaN(v)){
                        FormBar.push(v)
                        FormLabels.push(i +' '+monthNames[month])
                    }
                    return true;
                });
                return true;
      })
      return [FormBar,FormLabels]; 
}




export function BowlingBasics(DATA){
    let Games =[], Overs=[], Wickets=[], RC=[], AVG_OT=[], ECO_OT=[], SR_OT=[];
    let PRO_AVG=0, PRO_ECO=0, PRO_SR=0, Oppo=[], Team=[];
    DATA.map((game,i)=>{ 
           
         if(game.Bowling){ 
            
            // Bowling Innings
            Overs.push(parseFloat(game.Bowling.Overs))
            Games.push(1);
            // Wickets
            Wickets.push(parseInt(game.Bowling.Wickets,10))
            
            // RC
            RC.push(parseInt(game.Bowling.Runs,10))
            // Average
            PRO_AVG =  (RC.reduce((a, b) => a + b, 0) / Wickets.reduce((a, b) => a + b, 0)).toFixed(2);
            if (!isFinite(PRO_AVG)){PRO_AVG=0}
            AVG_OT.push(PRO_AVG);
            // Economy
            PRO_ECO = (RC.reduce((a, b) => a + b, 0)/Overs.reduce((a, b) => a + b, 0)).toFixed(2);
            if (!isFinite(PRO_ECO)){PRO_ECO=0}
            ECO_OT.push(PRO_ECO);
            // Strike Rate
            PRO_SR = ((Overs.reduce((a, b) => a + b, 0) * 5) /Wickets.reduce((a, b) => a + b, 0)).toFixed(2);
            if (!isFinite(PRO_SR)){PRO_SR=0}
            SR_OT.push(PRO_SR);
            
            Oppo.push(game.Meta.Opposition)
            Team.push(game.Meta.Team);
        }
        return true;
    })

    return [
        Games,                                                                                   // 0 Bowling Innings
        Wickets,                                                                                 // 1 Wickets Arr
        Wickets.reduce((a, b) => a + b, 0),                                                      // 2 Wickets Total
        Overs,                                                                                   // 3 Overs
        Overs.reduce((a, b) => a + b, 0),                                                        // 4 Overs Total
        RC,                                                                                      // 5 RC
        RC.reduce((a, b) => a + b, 0),                                                           // 6 RC Total
        (RC.reduce((a, b) => a + b, 0)/Overs.reduce((a, b) => a + b, 0)).toFixed(2) ,            // 7 EC
        ECO_OT,                                                                                  // 8 ECO ARR Over Time
        ((Overs.reduce((a, b) => a + b, 0) * 5) /Wickets.reduce((a, b) => a + b, 0)).toFixed(2), // 9 SR
        SR_OT,                                                                                   // 10 SR ARR Over Time
        (RC.reduce((a, b) => a + b, 0) / Wickets.reduce((a, b) => a + b, 0)).toFixed(2),         // 11 AVG
        AVG_OT,                                                                                   // 12 Average ARR Over Time
        Team,                                                                                   // 13 Team
        Oppo                                                                                   // 14 Oppo
    ]
}