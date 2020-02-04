const CleanBowling = (Data)=>{

        let Store=[]
        Data.Bowling.map((game,i)=>{
                let SplitFigures =  game[4].split("/");

                Store.push({
                    Fixture:parseInt(game["0"]["0"].id, 10),
                    Overs: game[3],
                    OversInt:parseInt(game[3], 10),
                    Figures:game[4],
                    Wickets:SplitFigures[0],
                    Runs:SplitFigures[1],
                    Ranking:game[11],
                    LW:parseFloat(game[6])
                })
                return true
            })
        return Store;
}

export default CleanBowling