var _ = require('lodash');

// Text Clean
const STRReplace = (str) =>{
    str = str.replace(/&apos;/g,"'").replace(/&amp;/g,'&').replace(/&#x2019;/g,"'").replace(/&gt;/g,">").replace(/&lt;/g,"<")
    return str;
}

// ******* OBJECTS AND ARRAYS
// Find Index of Array with in an Object
const FindObjectIndex =(obj,Variable,neddle)=>{
    //console.log(_.findIndex(obj,function(o) { return o[Variable] == neddle; }  ));
   return _.findIndex(obj,function(o) { return o[Variable] === neddle; }  )
}

// Find and Return a array within an OBJ based on its INDEX. Return NULL if not present
const FindArrayInObj = (obj, int)=>{
    if(int !== -1){
        return obj[int]
    }
    else{
        return null;
    }
}


export {STRReplace , FindObjectIndex, FindArrayInObj}