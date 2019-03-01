import axios from 'axios';
import store from "../store/index"
var _ = require('lodash');

export function FetchScoreCard(){

    this.Gameid=null;

    this.stripstr = ()=>{

    }

    this.FetchData = (api,PATH) =>{  
        
            axios.get('/api/scorecards/'+this.Gameid).then(res => { 
                   
                let First = res.data[1][0]["0"]
                let Second = res.data[1][1]["0"]
                First.shift();
                Second.shift();
                    console.log(First,Second)
                    
                    // Strip down the response from teh api and store in the reducer

                    store.dispatch({ type:"SC_STORE_CARD", payload:[First,Second] }); 
                    store.dispatch({ type:"SC_STORE_META", payload:res.data[0] }); 
                    store.dispatch({ type:"SC_LOAD", payload:true}); 
                    
                });
                
        }
                

    this.start = () => {
        console.log("Fetch the ScoreCard");
        this.FetchData()
    }
    
}