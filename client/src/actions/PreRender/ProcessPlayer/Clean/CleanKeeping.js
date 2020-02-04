const CleanKeeping =(Data)=>{

    let Store=[]
    Data.Keeping.map((game,i)=>{
        Store.push({
            Fixture:parseInt(game["0"]["0"].id, 10),
            catches: parseInt(game[3], 10),
            stumping:parseInt(game[4], 10),
            Ranking:game[11] 
        })
        return true
    })
    return Store;
}

export default CleanKeeping;