import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import Title from "../../../../Elements/type/PageTitle";

import InteractiveScatterChart from "../../../../Charts/ScatterChart";
import InteractiveChart from "../../../../Charts/MixedChart";

let Series=[],Labels =[];
export default class Section_Default extends Component {


    CreateRuns(Data){
        let Series=[]
        Data.map((game,i)=>{
            if(game.Batting){
                //console.log(game.Batting.RunInt)
                Series.push(game.Batting.RunInt)
            }
        })
        console.log(Series)
        return Series;
    }

    CreateAVG(Data){
        let Series=[]
        let div=0,TR=0;
        Data.map((game,i)=>{
            let AVG=null;
            if(game.Batting){
                TR = TR + game.Batting.RunInt;
                if(game.Batting.NotOut === 0){ div++}
                AVG = TR/div;
                if (!isFinite(AVG.toFixed(2))){AVG=0}
                console.log(AVG.toFixed(2),TR,div)
                Series.push(parseFloat(AVG.toFixed(2)))
            }
        })
        console.log(Series)
        return Series;
    }

    CreateDate(Data){
        let Series=[]
        Data.map((game,i)=>{
            if(game.Batting){
                //console.log(game.Batting.RunInt)
                Series.push(game.Meta.Date)
            }
        })
        console.log(Series)
        return Series;
    }

    
    componentWillMount() {
     
        Series = [{
            name: 'Runs',
            type: 'column',
            data: this.CreateRuns(this.props.DATA)
          }, {
            name: 'Average',
            type: 'area',
            data: this.CreateAVG(this.props.DATA)
          }]

          Labels = this.CreateDate(this.props.DATA)
        //console.log(Series);
    } 
    render() {
   
        return ( 
            <Row class="PodRow">
                    <Title Title={this.props.TITLE.TITLES.SCORES} /> 
                    <Pod canvas="canvas1 " ClassName="flex-100">
                        <InteractiveChart 
                            LookUp={this.props.DATA} 
                            Labels={Labels}
                            series={Series} 
                            HS={this.props.HS} 
                            Disc="Batting"
                            Var="RunInt" 
                        />
                    </Pod>
            </Row> 
        ) 
    }
} 