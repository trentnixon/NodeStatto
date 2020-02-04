/* eslint-disable */
export default function CreateRankings(){
        this.RankingsObj = [];
        this.Start = (ProcessGames)=>{ 

            ProcessGames.map((Game,i)=>{
                Game.Batting ? this.PushRanking(Game, "Batting",this.RankingsObj.Rankings.Batting) : null
                Game.Bowling ? this.PushRanking(Game, "Bowling",this.RankingsObj.Rankings.Bowling) : null
                Game.Keeping ? this.PushRanking(Game, "Keeping",this.RankingsObj.Rankings.Keeping) : null
                this.CombinedRankings(Game, i);
                return true
            })
        }

        this.PushRanking =(Game, Var,Obj)=>{
            let Year = Game.Meta.Date.split('/');
            if(!isNaN(Game[Var].Ranking)){ 
                Obj.push({ rank:parseInt(Game[Var].Ranking, 10), date:'20'+Year[2]})
            }     
        }
        
        this.CombinedRankings = (Game, i) => {

                this.RankingsObj.Rankings.Combined.push({
                    ThisDate:Game.Meta.Date,
                    Fixture: Game.Meta.Fixture,
                    FixtureInt: Game.Meta.FixtureInt,
                    Bowling : Game.Bowling ?  this.CheckRanking(Game.Bowling.Ranking, i, "Bowling"):this.RankingsObj.Rankings.Combined[i]["Bowling"], 
                    Batting : Game.Batting ? this.CheckRanking(Game.Batting.Ranking, i, "Batting"):this.RankingsObj.Rankings.Combined[i]["Batting"] ,
                    Keeping : Game.Keeping ? this.CheckRanking(Game.Keeping.Ranking, i, "Keeping"):this.RankingsObj.Rankings.Combined[i]["Keeping"] ,
                })

        }

        this.CheckRanking = (Rank, i, Var) => {
            //console.log(Rank, i, Var)
                // May have a possible problem with the 0
                if(!isNaN(parseInt(Rank ,10)))
                    {  return parseInt(Rank ,10)  }
                else{  
                        if(this.RankingsObj.Rankings.Combined[i]){
                            return this.RankingsObj.Rankings.Combined[i][Var] 
                        }
                        else{ return 0; }
                    }
     }
 }