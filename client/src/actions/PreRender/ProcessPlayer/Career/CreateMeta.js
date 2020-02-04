// Functions
    // Math
    import {Add} from "../../../Math/index"
    var _ = require('lodash');

/* ******************************************** */
    // Meta Class
/* ******************************************** */

export default function CreateMeta (){

            this.MetaObj =[];
        
            this.Start = (ProcessGames)=>{
                ProcessGames.map((Game,i)=>{
                        this.MetaObj.Games.int = Add(this.MetaObj.Games.int, 1)
                        this.CreateHistory(Game.Meta)
                        return true;
                    })
            }
            this.CreateHistory =(Game)=>{

                let gameDate = Game.Date.split("/");
                let FixturePosition = _.findIndex(this.MetaObj.Games.history, function(o) { return o.year=== '20'+gameDate[2]; });    
                
                if(FixturePosition === -1){  
                    this.MetaObj.Games.history.push(
                        { 
                            year:'20'+gameDate[2], 
                            Int:1
                        }
                    ) 
            }
                else{  
                    this.MetaObj.Games.history[FixturePosition].Int = Add(this.MetaObj.Games.history[FixturePosition].Int, 1)
            }
        }
    }