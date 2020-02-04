/*
    -- Clean Data
    -- Merge data
    -- Store Data
    // Class Completed 16 Jan 2020
    // to do:
        -- Refactor Login Sequence
*/


import CleanFixture from "./Clean/CleanFixture";
import CleanBatting from "./Clean/CleanBatting";
import CleanBowling from "./Clean/CleanBowling";
import CleanKeeping from "./Clean/CleanKeeping";
 
// Actions
import {LoginSequence as LS, LoginSequence as DS} from "./LoginSequencing/PrivateFunctions";
import {FindObjectIndex, FindArrayInObj} from "../../UI/Utils";
var _ = require('lodash');

export default function CleanData(){

        this.Fixture=[]
        this.Batting=[]
        this.Bowling=[]
        this.Keeping=[]
        this.StoreData=[];
        this.Completed = false

       

        this.Clean =(data)=>{ 


            console.log("DATA CLEANING STARTED")

            this.Fixture = CleanFixture(data)
            this.Batting = CleanBatting(data);
            this.Bowling = CleanBowling(data);
            this.Keeping = CleanKeeping(data);
 
            // Sort Objects into One


            this.Merge();
        }

        this.Merge=()=>{
            
            this.Fixture.map((game,i)=>{
                // Assign
                this.StoreData.push({
                    "Meta":this.Fixture[i],
                    "Batting":FindArrayInObj(this.Batting, FindObjectIndex(this.Batting,'Fixture',game.Fixture)),
                    "Bowling": FindArrayInObj(this.Bowling, FindObjectIndex(this.Bowling,'Fixture',game.Fixture)),
                    "Keeping":FindArrayInObj(this.Keeping, FindObjectIndex(this.Keeping,'Fixture',game.Fixture))
                });
                return true
            })
            this.Store();

        }

        this.Store=()=>{
            this.StoreData = _.sortBy(this.StoreData, [function(o) { return o.Meta.FixtureInt; }],['desc']);
            
            console.log("DATA CLEANING COMPLETED",  this.StoreData.length)
            DS([ { Type:"DATA_STORE_PRIMARY_CLEAN", Value:this.StoreData} ])
            LS([ {Type:'DATA_SET_LOAD_CLEAN',  Value:true},{Type:'INT_SET_PLAYERDATA_RECIEVED',  Value:true} ])

            // Task Completed, Inform Player Processing to Move Forward
            this.Completed = true;
        
        }

        this.RestoreClass = ()=>{
            this.Fixture=null
            this.Batting=null
            this.Bowling=null
            this.Keeping=null
            this.StoreData=[];
            this.Completed = false
        }
}