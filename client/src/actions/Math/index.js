
// ***************************************************************************** 
// General
// ***************************************************************************** 
    // Simple Addition
    const Add = (data,value) => {  if(!isNaN(value)){ return (data+value);}else{ return data}  }


// ***************************************************************************** 
// Batting
// ***************************************************************************** 
    // Average
    const BattingAvg = (Runs,Inn,NO) => { return (Runs/(Inn-NO)).toFixed(2) }
    // Strike Rate 
    const  BattingSR = (Runs,BF) => { return (Runs/BF*100).toFixed(2) }

    // Find Ducks
    const  FindDucks = (data,needle,variant) => {
        if(needle === 0){ 
            if(variant ===0){ data=data+1;}
        } return data;
    }

 

// ***************************************************************************** 
// Bowling
// ***************************************************************************** 
    // Economy
    const BowlingEconomy = (RC,OB)=>{
        return (RC/OB).toFixed(2)
    }

    // Strike Rate
    const BowlingSR = (OB,W)=>{
        return ((OB * 5) / W ).toFixed(2)
    }

    // Average
    const BowlingAverage = (RC,W)=>{
        return (RC/W).toFixed(2)
    }


// ***************************************************************************** 
// END
export { 
    Add,
    FindDucks,
    BattingAvg,
    BattingSR,
    BowlingEconomy,
    BowlingSR,
    BowlingAverage
}