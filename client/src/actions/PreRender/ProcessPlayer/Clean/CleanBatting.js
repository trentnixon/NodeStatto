

const CleanBatting = (Data) =>{
    let Store=[] 
    Data.Batting.map((game,i)=>{
        let NotOut=0;
        if(game[3].indexOf("*") !== -1){ NotOut=1 }
        Store.push({
            Fixture:parseInt(game["0"]["0"].id, 10),
            RunsValue: game[3],
            RunInt:parseInt(game[3], 10),
            BallsFaced:game[4],
            BallsFacedInt:parseInt(game[4], 10),
            Ranking:game[11],
            NotOut:NotOut,
            LW:parseFloat(game[6])
        })
        return true
    })
    return Store;
}

export default CleanBatting;