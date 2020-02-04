
import {STRReplace} from "../../../UI/Utils";

const _ = require('lodash');
const ALT=['Batting','Bowling','Keeping']

const CleanFixture =(Data)=>{
    let Store=[];
    let i =0
    while (i < ALT.length) {
        // eslint-disable-next-line
       Data[ALT[i]].map((game)=>{

        let GameDate = game["0"]["0"].meta;
        let SplitDate = GameDate.split('/');
        let Fixed = Math.floor(new Date( SplitDate[1]+'/'+SplitDate[0]+'/20'+SplitDate[2]).getTime()/1000);
        if(!isNaN(game[6])){
                Store.push(
                        {
                            Fixture:parseInt(game["0"]["0"].id, 10),
                            FixtureInt:Fixed,
                            Date:GameDate,
                            Month: parseInt(SplitDate[1],10),
                            Year:parseInt('20'+SplitDate[2],10),
                            Team: STRReplace(game[1]["0"].meta) ,
                            TeamID:game[1]["0"].id,
                            Opposition: STRReplace(game[2]["0"].meta),
                            OppositionID:game[2]["0"].id,
                            LW:parseFloat(game[6])
                        }
                    )
                }
            return true;
            })
        i++;
      }

      Store = _.uniqBy(Store, function (e) { return e.Fixture;});
      return Store;
}

export default CleanFixture;