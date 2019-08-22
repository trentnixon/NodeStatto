import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../../../Elements/type/PageTitle";

// Sections
//import InteractiveScatterChart from "../../../../Charts/ScatterChart";
import InteractiveChart from "../../../../Charts/MixedChart";

// Variables
let Series=[],Labels =[];

// Start Class
export default class Section_Default extends Component {


    CreateRuns(Data){
        let Series=[]
        Data.map((game,i)=>{
            if(game.Bowling){
                Series.push(game.Bowling.Runs)
            }
            return true;
        })
        //console.log(Series)
        return Series;
    }

    CreateSR(Data){
        let Series=[]
        let OB=0,WT=0;
        // OversInt , RunInt
        Data.map((game,i)=>{
            let SR=null;
            if(game.Bowling){
                WT = WT + parseInt(game.Bowling.Wickets,10);
                OB = OB + game.Bowling.OversInt;
                SR = (OB * 5) / WT
               
                if (!isFinite(SR.toFixed(2))){SR=0}
                Series.push(parseFloat(SR.toFixed(2)))
            }
            return true;
        })
        //console.log(Series)
        return Series;
    }


    CreateECO(Data){
        let Series=[]
        let OB=0,RC=0;
        // OversInt , RunInt
        Data.map((game,i)=>{
            let ECO=null;
            if(game.Bowling){
                RC = RC + parseInt(game.Bowling.Runs, 10);
                OB = OB + game.Bowling.OversInt;
               
                ECO = RC/OB;
                if (!isFinite(ECO.toFixed(2))){ECO=0}
                Series.push(parseFloat(ECO.toFixed(2)))
            }
            return true;
        })
        //console.log(Series)
        return Series;
    }

    CreateAVG(Data){
        let Series=[]
        let WT=0,RC=0;
        // OversInt , RunInt
        Data.map((game,i)=>{
            let AVG=null;
            if(game.Bowling){
                RC = RC + parseInt(game.Bowling.Runs, 10);
                WT = WT + parseInt(game.Bowling.Wickets,10);
               
                AVG = RC/WT;
                //console.log(AVG, RC, OB);

                if (!isFinite(AVG.toFixed(2))){AVG=0}
           
                Series.push(parseFloat(AVG.toFixed(2)))
            }
            return true;
        })
        //console.log(Series)
        return Series;
    }

    CreateDate(Data){
        let Series=[]
        Data.map((game,i)=>{
            if(game.Bowling){
                //console.log(game.Batting.RunInt)
                Series.push(game.Meta.Date)
            }
            return true;
        })
        //console.log(Series)
        return Series;
    }

    
    componentWillMount() {
     
        /**
         * {
            name: 'Runs Conceded',
            type: 'column',
            data: this.CreateRuns(this.props.DATA)
          },
         */
        Series = [{
            name: 'Average',
            type: 'area',
            data: this.CreateAVG(this.props.DATA)
          },{
            name: 'Economy',
            type: 'area',
            data: this.CreateECO(this.props.DATA)
          },{
            name: 'Strike Rate',
            type: 'area',
            data: this.CreateSR(this.props.DATA)
          }
        ]

          Labels = this.CreateDate(this.props.DATA)
        //console.log(Series);
    } 
    render() {
        console.log( this.props.DATA)
        return ( 
            <Row className="PodRow">
                    <Title Title={this.props.TITLE.SUBS.AVG + ' / ' +this.props.TITLE.SUBS.ECO + ' / ' +this.props.TITLE.SUBS.SR} /> 
                    <Pod canvas="canvas1 " className="flex-100">
                        <InteractiveChart 
                            LookUp={this.props.DATA} 
                            Labels={Labels}
                            series={Series} 
                            Disc="Batting"
                            Var="RunInt" 
                        />
                    </Pod>
            </Row> 
        ) 
    }
} 