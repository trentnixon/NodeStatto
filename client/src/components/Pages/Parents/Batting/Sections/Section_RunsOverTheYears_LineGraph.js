import React, { Component } from 'react';
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
import ChartContainer from "../../../../Template/Page/ChartContainer";
import LineGraph from "../../../../Charts/LineChart";

let Series=[], Labels=[];

function FindValues(Year,Data){
    let DataSeries=[], DateSplit=[], ReturnArr=[];
    Year = Year.replace("20", "");

    Data.map((Game,i)=>{
        DateSplit = Game.Meta.Date.split("/");
        if(DateSplit[2] === Year)
            {
                if(Game.Batting)
                {
                    //console.log(DateSplit[1], DateSplit[2], Game.Batting.RunInt);
                    if(!DataSeries[ DateSplit[1]-1 ])
                    {
                        DataSeries[DateSplit[1]-1 ]= Game.Batting.RunInt
                    }
                    else{
                        DataSeries[DateSplit[1]-1] = parseInt(DataSeries[DateSplit[1]-1],10) + Game.Batting.RunInt
                    }
                }  
            }
        return true;
    })

    let i=0,Stored=0,value=0;
    while (i < 12) {
       
        if(!DataSeries[i]){ value = 0}
        else{ value = DataSeries[i]}
        ReturnArr.push(Stored + value);
        Stored = Stored + value;
        //console.log(i,Stored)
        i++;
      }

    return ReturnArr; 
}

function FindName(Data,Years){
    let NewSeries=[]
    Years.map((year,i)=>{
            //console.log(year.year)
            NewSeries.push({
                name:year.year,
                data:FindValues(year.year,Data)
            })
            return true;
    })
   //console.log(NewSeries);
   return NewSeries;
}


export default class Section_Default extends Component {
    componentWillMount() {

        Series =  [ FindName(this.props.DATA, this.props.PRIMARY.CAREER.Career.Meta.Games.history)]
         Labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
        
    } 
    render() {
      //console.log(Series);
        return ( 
            <Row className="PodRow"> 
                <ChartContainer
                    Info={this.props.TITLE.DESC.RUNSYEARSLINE}
                    Interactive={true}
                    Title={this.props.TITLE.SUBS.RUNSYEARSLINE}
                    flex=" flex-100"
                >
                    <Pod canvas="canvas1 " className="flex-100">
                        <LineGraph series={Series[0]} Labels={Labels}/>
                    </Pod>
                </ChartContainer>
                    
            </Row> 
        ) 
    }
} 