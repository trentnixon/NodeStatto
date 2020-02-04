/**
 * 
 *  The Purpose of this Class is:
 *  
 */

//import {CareerObj} from "./Career/CareerObj"
import {LoginSequence as LS, LoginSequence as DS} from "./LoginSequencing/PrivateFunctions";

// Functions
    // Import Classes
    import CreateMeta from "./Career/CreateMeta"
    import CreateRankings from "./Career/CreateRankings";
    import CreateBatting from "./Career/CreateBattingStats";
    import CreateBowling from "./Career/CreateBowlingStats";
    import CreateKeeping from "./Career/CreateKeepingStats"
    // Math
    //import {Add} from "../../Math/index";

    // Create new 
    const ProcessMeta = new CreateMeta();
    const ProcessRankings = new CreateRankings();
    const ProcessBatting = new CreateBatting();
    const ProcessBowling = new CreateBowling();
    const ProcessKeeping = new CreateKeeping()
    // Utils   
    // var _ = require('lodash');

 
export default function CreateCareer(){
    // Lets create a form guide

    // Class Variables
    this.Clean=[]
    this.CareerObj = {};
    this.Completed = false;

    this.Start = ()=>{

        console.log("PRIMARY CAREER STARTED")
        // Send out Obj for processing
        // Meta
        ProcessMeta.MetaObj = this.CareerObj.Meta;
        ProcessMeta.Start(this.Clean);
        // Rankings 
        ProcessRankings.RankingsObj = this.CareerObj.Meta
        ProcessRankings.Start(this.Clean);
        // Batting
        ProcessBatting.BattingObj = this.CareerObj.Batting
        ProcessBatting.Start(this.Clean);
        // Bowling
        ProcessBowling.BowlingObj= this.CareerObj.Bowling
        ProcessBowling.Start(this.Clean)
        // Keeping
        ProcessKeeping.KeepingObj = this.CareerObj.Keeping
        ProcessKeeping.Start(this.Clean)
        
        this.Store()
    }
    this.Store = ()=>{

        console.log("PRIMARY CAREER STORED")
        DS([ { Type:"DATA_STORE_PRIMARY_CAREER", Value:this.CareerObj} ]);
        LS([ { Type:"DATA_SET_LOAD_CAREER", Value:true}]);

        this.Completed = true;
    } 

    this.Restore = ()=>{ 

        this.Completed = false;
    }
}

