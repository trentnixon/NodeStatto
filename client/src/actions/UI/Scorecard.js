import axios from 'axios';
import store from "../../store/index"
// eslint-disable-next-line
var _ = require('lodash');

export function FetchScoreCard(){

    this.Gameid=null;

    this.stripstr = ()=>{}

    this.SplitTeams = (STR)=>{
        let Ahref = STR.split('Scored')
        let Meta = Ahref[1].trim().split(' ');
        let Meta2 = Ahref[0].trim().split('">')
        let ID = Meta2[0].split("teamid=");
        let Name  = Meta2[1].split("</a>")
    
        return {
            'Name':Name[0],
            'Id':ID[1],
            'Runs': Meta[0],
            'For':Meta[2],
            'Overs': Meta[4]
        }            
    }
    
    this.SplitResult = (Result)=>{
        console.log(Result);
        let ThisResult = Result.split('">')[1].split("</a>");
        return ThisResult;

    }
    this.SingleSplit = (STR) =>{ return STR.split(": ");}

    this.SplitMeta = (date, Meta) => {
        let SplitThis=[],SplitDate=[];

        //console.log(Meta);
        // Time and Date
        SplitThis = this.SingleSplit(Meta[1])
        SplitDate = SplitThis[1].split(' ')

        return {
            'Meta':{
                        'Date':SplitDate[0],
                        'Time':SplitDate[1],
                        'Umpire': this.SingleSplit(Meta[3])[1],
                        'Ground': this.SingleSplit(Meta[2])[1],
                        'first':this.SplitTeams(Meta[5]),
                        'second':this.SplitTeams(Meta[6]),
                        'Result':this.SplitResult(Meta[7])
            }}
    }
    
   

    this.FetchData = (api,PATH) =>{  
            axios.get('/api/scorecards/'+this.Gameid).then(res => { 

                let Meta = this.SplitMeta(this.SingleSplit(res.data[0][1]), res.data[0]) 
                let First = res.data[1][0]["0"]
                let Second = res.data[1][1]["0"]
                First.shift(); 
                Second.shift();
                
               
                // Strip down the response from the api and store in the reducer
                store.dispatch({ type:"SC_STORE_CARD", payload:[First,Second] }); 
                store.dispatch({ type:"SC_STORE_META", payload:Meta }); 
                
                store.dispatch({ type:"SC_STORE_CHARTS", payload:this.ScoreCardCharts([First,Second], Meta) }); 
                store.dispatch({ type:"SC_LOAD", payload:true}); 
            });
        }

    this.start = () => {
        console.log("Fetch the ScoreCard");
        this.FetchData()
    }


    // Scorerd Charts

    this.CreateLine=(arr,byes)=>{
        let Series=[], Cont=[byes], o=1

        arr.map((p,i)=>{
            o=1;
            let BpO=5;
            let RC= parseInt(p[7],10);
            let OB = parseInt(p[6].split('.')[0],10) 
            let EB = parseInt(p[6].split('.')[1],10)
            let MaxOvers = Math.ceil(p[6])

            let EcoBall = ((RC /((OB*BpO) + EB )));
            let MinusRuns = 0 
            
            if(EB>0){ MinusRuns = EcoBall*(BpO-EB);  }

            let NewEco = ((((EcoBall*BpO)*MaxOvers) - MinusRuns)/MaxOvers);
                    while(o <= MaxOvers){
                            
                            Cont.push(NewEco);
                            Series.push((Cont.reduce((a, b) => a + b, 0)).toFixed(0) )
                            o++;
                        }
            return true;
        })

        return Series;
    }

    this.Worm=(SC,Meta, Byes)=>{
     
           return [
                {
                  name: Meta.Meta.first.Name,
                  data: this.CreateLine(SC[1], Byes[5])
                },
                { 
                    name: Meta.Meta.second.Name,
                    data: this.CreateLine(SC[0],Byes[2]) 
                }
              ];

    }

    // Labels
    this.Labels=(Meta)=>{
       
       return { 
                Teams:[Meta.Meta.first.Name,Meta.Meta.second.Name]
            }
    }

    // Bowling totals and Byes
    this.byes=(SC, Meta)=>{
        //console.log(SC, Meta.Meta.first.Runs)
        let First=0, Second=0;
        SC[0].map((p,i)=>{
        
            First = parseInt(First,10)+parseInt(p[7],10);
            return true
        })
        SC[1].map((p,i)=>{
            Second = parseInt(Second,10)+parseInt(p[7],10);
            return true
        })
        //console.log(First, Second)



        return[
            First,
            Meta.Meta.second.Runs,
            (Meta.Meta.second.Runs-First),
            Second,
            Meta.Meta.first.Runs,
            (Meta.Meta.first.Runs-Second),
        ]
    }

    this.FindRuns=(inn)=>{
        let Runs=[0,0,0,0,0,0,0,0]
        console.log(inn);
            //let Ordered = _.orderBy(inn,[1],['desc'])
           // console.log(Ordered);
           inn.map((p,i)=>{
                if(p[1] !== "0"){
                    console.log(p[2])
                    Runs[p[1]-1] = p[2] 
                }
                return true;
            })
            return Runs;
    }
    this.ByBattingOrder=(SC,Meta)=>{

        console.log(SC[0]);
        this.FindRuns(SC[0]);
        
        return [
            {
                name: Meta.Meta.first.Name,
              data:  this.FindRuns(SC[0])
            },
            { name: Meta.Meta.second.Name,
                data:  this.FindRuns(SC[1])
            }
          ];
    }

    this.ScoreCardCharts =(SC, Meta)=>{
        let FindByes = this.byes(SC, Meta)
        
        
        
        return {
            Labels:this.Labels(Meta),
            Worm:this.Worm(SC,Meta,FindByes),
            BattingOrder:this.ByBattingOrder(SC,Meta),
            byes:FindByes
        }
        
}

} 