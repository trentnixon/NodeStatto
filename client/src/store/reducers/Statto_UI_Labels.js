const InitialState ={  
    SETLANG:"EN",
    lANG:{
        EN:{
            META:{
                SITENAME:"STATTO",
                BYLINE:"Reviewing your LMS Career"  
            },
            LOADING:{
                PRELOADTEAMS:"Teams",
                PRONOUN:"Fetching",
                PLAYERROSTER:"Player Roster",
                PLAYERPRONOUN:"Player", 
                BUILDING:"Building Career"
            }, 
            LOGIN:{
                SELECTTEAM:"Select a Team", 
                LANG:"Select a Language"
            },
            SITE:{
                TITLES:{  
                    DASHBOARD:"DASHBOARD", 
                    OVERVIEW:"OVERVIEW", 
                    RANKINGS:"RANKINGS", 
                    BATTING:"BATTING",
                    BOWLING:"BOWLING",
                    KEEPING:"KEEPING",
                    HISTORY:"HISTORY",
                    RECENT:"Recent Games",
                    PLAYED:"Games Played",
                    TEAMS:"Teams",
                    GAMES:"Games",
                    CAREER:"CAREER",
                    FORMGUIDE:"FORM",
                    MILESTONE:"Milestones and Achievements", 
                    SCORES:"SCORES"
                },
                SUBS:{
                    RUNS:"Runs",
                    BALLS:"By The Ball", 
                    WICKETS:"Wickets",
                    CATCHES:"Catches",
                    INNINGS:"Innings",
                    NOTABLESCORES:"Notable Scores",
                    PREVIOUS:"Previous",
                    NEXT:"Next",
                    FOR:"For",
                    AGAINST:"Against",
                    FORAGAINST:"For and Against",
                    STATS:"Stats",
                    AVG:"Average",
                    ECO:"Economy",
                    HS:"Highest Score",
                    BB:"Best Bowling"
                },
                DESC:{
                    DESCRANKINGS:"Breakdown of World Rankings over a Career",
                    FORMGUIDE:"Form data is pulled from the last 5 Games"
                },
                FORM:{
                    INPUTLABELS:{
                        YEARS:"Select a Year",
                        FILTER:"Filter By",
                        VARIABLE:"Select a Variable"
                    }
                },
                CTA:{
                    ALL:"See All",
                    MORE:"More",
                    FULL:"Full List"
                }
            },
        },
        IND:{
            Meta:{
                SITENAME:"STATTO",
                BYLINE:"apane elemes kairiyar kee sameeksha karana"
            },
            Loading:{
                           
            },
            Login:{
                          
            },
            Site:{
                
            },
            
        }
    }
    
}

const LABELS = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
            /** Store LOGIN Auto Complete options */
            case "CHANGELANGUAGE":{
                return {...state, SETLANG:action.payload}
                // eslint-disable-next-line 
                break
                }
        
        }
		return state;
	}
export default LABELS;