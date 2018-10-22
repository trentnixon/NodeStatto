const express = require('express');
var request = require('request');
var cheerio = require('cheerio');
const path = require('path')
const app = express();

const Domain = 'https://www.lastmanstands.com/player-profile/';
const URLVAR ='t20?userid=';

const Page = ['/batting-career-history/','/batting-career-history-non-counting-games/',
              '/bowling-career-history/','/bowling-career-history-non-counting-games/',
              '/keeping-career-history/','/keeping-career-history-non-counting-games/' ]

/* *****************************************
**
  Handle Chnages to the Data
** */

// Split the Link
    const SplitA = (str,copy) =>{
        // Variables
        let NewStr=null, id=null,arr=[];
        // Split a
        NewStr = str.split('&');
        // Split Params
        id = NewStr[1].split('=');
        // Store in Arr
        arr.push( {"name":id[0],"id":id[1],"meta":copy} );
        // Return
        //console.log(copy)
        return arr;
    }

function DataLoop(html){
        //console.log(data)
        let Rows=[];
        var $ = cheerio.load(html);
        const data = $('.rank-table tbody tr');

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
 
function DataLoopAddRow(html){

    let Rows=[];
    var $ = cheerio.load(html);
    const data = $('.rank-table tbody tr');
    data.has('td').each(function() {
    
        var arrayItem = {};
        
        $('td', $(this)).each(function(index, item) 
            {

                if(index === 1){
                    arrayItem[1] = [{ meta:null }];
                    arrayItem[2] = SplitA($(item).find('a').attr('href'), $(item).find('a').html());
                 
                }else{
                    if(index > 1){ index++;}
                        // If Link, Split and Create Object
                        if($(item).find('a').length != 0){
                            arrayItem[index]=SplitA($(item).find('a').attr('href'), $(item).find('a').html());
                        }
                            // else raw copy, Insert into array
                        else{
                            arrayItem[index] = $(item).html();
                        }
                }
            });
        
        Rows.push(arrayItem);
    }); // End Each
    return Rows;
}

function ping(html){
    //console.log(html)
    var $ = cheerio.load(html);
    const data = $('#pp-new-top-right-details h2');
    return data.text();
    //
}
/* *****************************************
** Create API Routes
******************************************** */
  /*********************************************************************************
     * 
     * PING LMS
     * 
     ********************************************************************************/
 /** Counted Games */

 app.get('/api/ping/:id', function(req, res){
    url = Domain+URLVAR+req.params.id;
    //console.log(url)
    request(url, function(error, response, html){
        if(!error && response.statusCode == 200){ 
                res.json(ping(html));
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
            if(!error && response.statusCode == 200){ res.json(DataLoopAddRow(html)); }
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
            if(!error && response.statusCode == 200){
                res.json(DataLoop(html));
            }
        })
    })


    /** NON Counted Games */
    app.get('/api/NonCountingBowling/:id', function(req, res){
        url = Domain+Page[3]+URLVAR+req.params.id;
                request(url, function(error, response, html){
                    if(!error && response.statusCode == 200){
                    res.json(DataLoopAddRow(html));
                }
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
            if(!error && response.statusCode == 200){ res.json(DataLoopAddRow(html)); }
        })
    })

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })

}
    // Set server ports and Listener
        const port = 5000
        app.listen(port, ()=>console.log(`Server Started on port ${port}`))