import store from "../store/index"
//import { Route } from 'react-router-dom'

export function UXDrawer(value){
    store.dispatch({ type:"MobileDrawerState", payload:value});
} 

export function ISMOBILE(value){
    store.dispatch({ type:"ISMOBILE", payload:value});
}

export function Form_Select_Year(value){
    store.dispatch({ type:"SELECT_YEAR", payload:value});
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
      Object.keys(ByYear).map((year,i)=>{

        let PASSING = ByYear[year].reduce((acc, item) => {
                if (!acc[item.Meta.Month]) {
                  acc[item.Meta.Month] = [];
                }
              
                acc[item.Meta.Month].push(item);
                return acc;
              }, {})
              Create[year]=PASSING
              
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

      let FormBar=[]
      let FormLabels=[]
      FilteredList.map((year,i)=>{
            Object.keys(year).map((month,t)=>{
                    let v = FormFactor(year[month],CAREER)[3];
                    if(!isNaN(v)){
                        FormBar.push(v)
                        FormLabels.push(i +' '+monthNames[month])
                    }
                })
      })
      return [FormBar,FormLabels];
}