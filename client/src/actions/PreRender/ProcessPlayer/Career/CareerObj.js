
 const CareerObj={
        Career:{
            Meta:{
                Games:{
                    int:0,
                    history:[]
                },
            
                Rankings:{
                    Batting:[],
                    Bowling:[], 
                    Keeping:[],
                    Combined:[{
                        ThisDate:null, 
                        Fixture: 0,
                        FixtureInt: 0,
                        Bowling : 0,
                        Batting : 0,
                        Keeping :0
                    }
                    ]
                }
            },
            Batting:{
                    runs:0,
                    ballsFaced:0,
                    innings:0,
                    average:0,
                    strikeRate:0,
                    hs:0,
                    notOut:0,
                    ducks:0,
                    s_10:0,
                    s_20:0,
                    s_30:0,
                    s_40:0,
                    s_50:0,
                    s_100:0,
                    overTheYears:[]
            },
            Bowling:{
                wickets:0,
                innings:0,
                ob:0,
                rc:0,
                economy:0,
                average:0,
                sr:0,
                fa2:0,
                fa3:0,
                fa4:0,
                fa5:0,
                fa6:0,
                fa7:0,
                overTheYears:[]
            },
            Keeping:{
                catches:0,
                stumping:0,
                innings:0,
                overTheYears:[]
            }
        }
    };

    const ExportCareerObj = ()=>{
        return {
            Career:{
                Meta:{
                    Games:{
                        int:0,
                        history:[]
                    },
                
                    Rankings:{
                        Batting:[],
                        Bowling:[], 
                        Keeping:[],
                        Combined:[{
                            ThisDate:null, 
                            Fixture: 0,
                            FixtureInt: 0,
                            Bowling : 0,
                            Batting : 0,
                            Keeping :0
                        }
                        ]
                    }
                },
                Batting:{
                        runs:0,
                        ballsFaced:0,
                        innings:0,
                        average:0,
                        strikeRate:0,
                        hs:0,
                        notOut:0,
                        ducks:0,
                        s_10:0,
                        s_20:0,
                        s_30:0,
                        s_40:0,
                        s_50:0,
                        s_100:0,
                        overTheYears:[]
                },
                Bowling:{
                    wickets:0,
                    innings:0,
                    ob:0,
                    rc:0,
                    economy:0,
                    average:0,
                    sr:0,
                    fa2:0,
                    fa3:0,
                    fa4:0,
                    fa5:0,
                    fa6:0,
                    fa7:0,
                    overTheYears:[]
                },
                Keeping:{
                    catches:0,
                    stumping:0,
                    innings:0,
                    overTheYears:[]
                }
            }    
        }
    }

 export {CareerObj,ExportCareerObj }


   /** 
   Form:{
    Meta:{
        Games:{
            int:0,
            history:[]
        }
    },
    batting:{
        runs:0,
        ballsFaced:0,
        innings:0,
        average:0,
        strikeRate:0,
        hs:0,
        notOut:0,
            ducks:0,
            s_10:0,
            s_20:0,
            s_30:0,
            s_40:0,
            s_50:0,
            s_100:0,
    },
    bowling:{
        wickets:0,
        innings:0,
        ob:0,
        rc:0,
        economy:0,
        average:0,
        sr:0,
        fa2:0,
        fa3:0,
        fa4:0,
        fa5:0,
        fa6:0,
        fa7:0,
    },
    Keeping:{
        catches:0,
        stumping:0,
        innings:0,
    }
}
*/