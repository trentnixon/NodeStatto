const express = require('express');
var request = require('request');
var cheerio = require('cheerio');
const path = require('path')
const app = express();

const Domain = 'https://www.lastmanstands.com/cricket-player/';
const URLVAR = 't20/?playerid=';
// https://www.lastmanstands.com/cricket-player/t20/?playerid=47918
// https://www.lastmanstands.com/cricket-player/t20?playerid=47918
// https://www.lastmanstands.com/cricket-player/batting-career-history/t20?playerid=47918
//const Page = ['/batting-career-history/','/batting-career-history-non-counting-games/',
//              '/bowling-career-history/','/bowling-career-history-non-counting-games/',
 //             '/keeping-career-history/','/keeping-career-history-non-counting-games/' ]

/* *****************************************
**
  Handle Changes to the Data
** */

// Split the Link
    const SplitA = (str,copy) =>{
        // Variables
        let NewStr=null, id=null,arr=[];
        // Split a
        
        NewStr = str.split('&');
        if(NewStr[1] === undefined){  NewStr = str.split('?');}
        // Split Params
        id = NewStr[1].split('=');
        // Store in Arr
        arr.push( {"name":id[0],"id":id[1],"meta":copy} );
        // Return
        //console.log(copy)
        return arr;
    }



function DataLoop($ , xPath){
        let Rows=[];
        const data = $(xPath);

        data.has('td').each(function() {
            var arrayItem = {};
            $('td', $(this)).each(function(index, item) 
                {
                    // If Link, Split and Create Object
                    if($(item).find('a').length != 0){
                            arrayItem[index]=SplitA($(item).find('a').attr('href'), $(item).find('a').html());
                    }
                        // else raw copy, Insert into array
                    else{
                            arrayItem[index] = $(item).html();
                    }
                });
                Rows.push(arrayItem);
        }); // End Each
        return Rows; 
    }
 

    function PullMeta($,id){

            let Meta={};

            // Player Name
            Meta["ID"] = id;
            Meta["Name"] = $('#player-name-block p').text(); 
            Meta["Matches"] = $('.non-phone  #player-stats-matches2 span').text();  
            Meta["Batting_Runs"] = $('.non-phone #player-stats-runs2 span').text();
            Meta["Batting_Average"] = $('.non-phone #player-stats-batting-average2 span').text();
            Meta["Batting_SR"] = $('.non-phone #player-stats-strike-rate2 span').text();
            Meta["Batting_HS"] = $('.non-phone #player-stats-high-score2 span').text();

            Meta["Bowling_Overs"] = $('.non-phone #player-stats-overs2 ').text();
            Meta["Bowling_Wickets"] = $('.non-phone #player-stats-wickets2 ').text();
            Meta["Bowling_Economy"] = $('.non-phone #player-stats-economy2 ').text();
            Meta["Bowling_Average"] = $('.non-phone #player-stats-bowling-average2 ').text();
            Meta["Bowling_Best"] = $('.non-phone #player-stats-best-figures2 ').text();
            
            return Meta;
    }



    /** Strip TeamSheet */

function TeamSheet(html){
    
    var $ = cheerio.load(html);
    // team-profile-2019-content-block
    const TeamTable = $('#team-profile-2019-content-block');
    let Rows=[];
   // console.log(TeamTable);
        TeamTable.has('div.team-top-player').each(function() {
            var arrayItem = {};
            $('div.name', $(this)).each(function(index, item) 
           
                {
                    // arrayItem[index] = $(item).html();

                    arrayItem[index]=SplitA($(item).find('a').attr('href'), $(item).find('a').html());

                    //console.log(item);
                    // If Link, Split and Create Object
               /*   if($(item).find('a').length != 0){
                            arrayItem[index]=SplitA($(item).find('a').attr('href'), $(item).find('a').html());
                    }
                        //else raw copy, Insert into array
                    else{
                            arrayItem[index] = $(item).html();
                    }*/
                });
                Rows.push(arrayItem);
        }); // End Each
        //console.log(Rows);
        return Rows; 
}




/** PING */
function ping(html,id){
    
    let  LMSData={}

    LMSData["Meta"]={};
    LMSData["Batting"]={};
    LMSData["Bowling"]={};

    let $ = cheerio.load(html);
    
    LMSData["Meta"] = PullMeta($,id);
    LMSData["Batting"] = DataLoop($ , '#pp-batting-history-container .rank-table tbody tr');
    LMSData["Bowling"]= DataLoop($ , '#pp-bowling-history-container .rank-table tbody tr');
    
    return LMSData;
}


function StripscoreCard(html){
        
    let Rows=[],GameMeta=[],TeamsArray=[];
    var $ = cheerio.load(html);
    
    const Teams = $('.mobile-scroll');
    const Meta = $('#scorecard-container');

    
    // Pick up the Meta Data for the Game
    Meta.has('p').each(function() {
        var arrayMeta = {};
        $('p', $(this)).each(function(index, item) 
        {
            if( $(item).html() !== '&#xA0;')
            {
                GameMeta = $(item).html().split('<br>')

                if(GameMeta.length > 1){
                    arrayMeta[index] = GameMeta;
                }
            }
        });
        Rows.push(arrayMeta);
    });


    // Loop through the Team Scores
    Teams.find('.sortable').each(function(MainIndex,item) {
        
        TeamsArray[MainIndex] =[]

        $(item).has('tr').each(function(TDindex,TDitem){
         
            let TDArray=[]

            $('tr', $(this)).each(function(TRindex, item){

               TDArray[TRindex]=[]
                $(item).has('td').each(function(){
                    $('td', $(this)).each(function(index, item) {
                     
                        if($(item).find('a').length != 0){
                            let id = $(item).find('a').attr('href').split('=');
                            TDArray[TRindex][index] = {"id":id[1],"Name": $(item).find('a').html()};
                         }
                         // else raw copy, Insert into array
                         else{
                            TDArray[TRindex][index] = $(item).html();
                         }
                    })
                })
            })

            TeamsArray[MainIndex].push(TDArray);
            Rows.push(TeamsArray);
           
        })
    })
        return Rows;
}

/* *****************************************
** Create API Routes
******************************************** */
 
 /*********************************************************************************
     * 
     * TEAM SHEET
     * 
     ********************************************************************************/
 /** Counted Games */

 app.get('/api/team/:id', function(req, res){
  
    url = 'https://www.lastmanstands.com/team-profile/batting-stats/t20?teamid='+req.params.id;
   
    request(url, function(error, response, html){
        if(!error && response.statusCode == 200){ 

            res.json(TeamSheet(html));
        }
    })
})


/*********************************************************************************
     * 
     * PING LMS
     * 
     ********************************************************************************/
 /** Counted Games */

 app.get('/api/ping/:id', function(req, res){
    
    url = Domain+URLVAR+req.params.id;
   
    request(url, function(error, response, html){
        if(!error && response.statusCode == 200){ 
                res.json(ping(html,req.params.id));
        }
    })
})



    /*********************************************************************************
     * 
     * Collect Batting Data
     * 
     ********************************************************************************/


     /** Counted Games */
    app.get('/api/batting/:id', function(req, res){
        url = Domain+Page[0]+URLVAR+req.params.id;
        request(url, function(error, response, html){
            if(!error && response.statusCode == 200){ res.json(DataLoop(html));}
        })
    })

     /** NON Counted Games */
     app.get('/api/NonCountingBatting/:id', function(req, res){
        url = Domain+Page[1]+URLVAR+req.params.id;
        request(url, function(error, response, html){
            if(!error && response.statusCode == 200){ res.json(DataLoop(html)); }
        }) 
    })


    /** *******************************************************************************
     * 
     * Collect Bowling Data
     * 
     ******************************************************************************* */
    app.get('/api/bowling/:id', function(req, res){
        url = Domain+Page[2]+URLVAR+req.params.id;
        request(url, function(error, response, html){
            if(!error && response.statusCode == 200){res.json(DataLoop(html));}
        })
    })


    /** NON Counted Games */
    app.get('/api/NonCountingBowling/:id', function(req, res){
        url = Domain+Page[3]+URLVAR+req.params.id;
                request(url, function(error, response, html){
                    if(!error && response.statusCode == 200){res.json(DataLoop(html));}
            })
        })


    /** *******************************************************************************
     * 
     * Collect Keeping Stats
     * 
     ******************************************************************************* */
    app.get('/api/Keeping/:id', function(req, res){
        url = Domain+Page[4]+URLVAR+req.params.id;
        request(url, function(error, response, html){
            if(!error && response.statusCode == 200){ res.json(DataLoop(html)); }
        })
    })
    
       /** NON Counted Games */
    app.get('/api/NonCountingKeeping/:id', function(req, res){
        url = Domain+Page[5]+URLVAR+req.params.id;
        request(url, function(error, response, html){
            if(!error && response.statusCode == 200){ res.json(DataLoop(html)); }
        })
    })



  /*********************************************************************************
     * 
     * ScoreCards
     * 
     ********************************************************************************/
 /** Counted Games */

 app.get('/api/scorecards/:id', function(req, res){
    
    const Domain = 'https://www.lastmanstands.com/leagues/scorecard/';
    const URLVAR = 't20&fixtureid=';

    url = Domain+URLVAR+req.params.id;
    

    
    request(url, function(error, response, html){
        if(!error && response.statusCode == 200){ 
              res.json(StripscoreCard(html));
        }
    })
    
})



/** End End Points */





if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })

}
    // Set server ports and Listener
        const port = process.env.PORT || 5000;
        app.listen(port, ()=>console.log(`Server Started on port ${port}`))