const InitialState ={  
    SETLANG:"EN",
    lANG:{
        EN:{
            META:{
                SITENAME:"STATTO",
                BYLINE:"The Pursuit of the Unnecessary"   
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
                    MILESTONE:"Milestones",  
                    ACHIEVEMENTS:"Achievements", 
                    SCORES:"SCORES"
                },
                SUBS:{  
                    RUNS:"Runs",
                    BALLS:"By The Ball",  
                    WICKETS:"Wickets", 
                    OVERS:"Over",
                    CATCHES:"Catches",
                    STUMPINGS:"Stumpings",
                    INNINGS:"Innings",
                    NOTABLESCORES:"Notable Scores",
                    NOTABLEFIGURES:"Notable Figures",
                    AVGVSRUN:"Average vs Runs over time",
                    RUNSYEARSLINE:"Runs: Year on Year",
                    WICKETSYEARSLINE:"Wickets: Year on Year",
                    PREVIOUS:"Previous",
                    NEXT:"Next",
                    FOR:"For",
                    AGAINST:"Against",
                    FORAGAINST:"For and Against", 
                    BASIC:"The Run Down",
                    BATTING:"Batting",
                    RANKINGS:"Rankings",
                    STATS:"Stats",
                    AVG:"Average",
                    ECO:"Economy",
                    HS:"Highest Score", 
                    BB:"Best Bowling",
                    BF:"Balls Faced", 
                    SR:"Strike Rate",
                    CR:"Country Ranking",
                    WR:"World Ranking",
                    NO:"Not Outs",
                    DUCKS:"Ducks",
                    FIFTY:"Fifties"
                },
                CHARTS:{
                    CHART:"Chart",
                    SCATTER:"Scatter" 
                },
                DESC:{
                    TODO:"CHART DESCRIPTION COMING SOON",
                    DESCRANKINGS:"Breakdown of World Rankings over a Career",
                    FORMGUIDE:"Form data is pulled from the last 5 Games",
                    RANKINGLINE:"Players Career Batting, Bowling and Keeping rankings Compared as a Line graph ",
                    GAMESPLAYEDBAR:"Games played as a percentage over the years.",
                    TEAMSPLAYEDFOR:"List of all the Teams played for and the Number of apperances for that Team",
                    RUNSANDBALLSBAR:"Runs compared to balls faced. Some charts may include the players overall strike rate for the games showen",
                    RUNSYEARSLINE:"This Graph can be used to compare a Players Year against another. Each line in this graph represents an Annual Run Haul.",
                    WICKETSYEARSLINE:"This Graph can be used to compare a Players Year against another. Each line in this graph represents an Annual Wicket Haul.",
                    FORMBATTINGRADIAL:"Visual representation of a Players Form.  A players form is worked out by comparing Career and Current form variables such as Average and Strike Rate over time.",
                    FORMBATTINGOVERTIME : "This chart shows a players form month on month over the lifespan of their career. Each month is compared to their current stats. Bars in Green show good form, Yellow Average and Red Poor Form"
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
                    MORE:"",
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