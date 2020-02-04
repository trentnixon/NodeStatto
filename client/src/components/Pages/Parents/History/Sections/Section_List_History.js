import React, { Component } from 'react';

import Row from "../../../../Template/Page/Row";
import PodWrapper from "../../../../Template/Page/Structure/Pods/PodType/Pod_Basic";

// Form 
//import SELECTYEAR from "../../../../Venders/MaterialUI/FormElements/FormSelect/SelectYear"
import Filter from "../../../../Venders/MaterialUI/Filter/DataFilterOptions"
import ListHistory from "../../../../Venders/MaterialUI/Lists/List_History"

var _ = require('lodash');
 
export default class Section_HistoryList extends Component { 

    state = {
            labelWidth: 100, 
            Year:"Career",
            Created:0,
            List:[]
      }
    
      createList(arr , Year, SelectedTeam)   
        {
            let CreateNewList=[]
            let NewYear;
            // eslint-disable-next-line
                arr.map((game,i)=>{
                    //console.log(Year, game.Meta.TeamID,this.props.SelectedID)
                    if(
                        game.Meta[this.props.OrderBy] === this.props.SelectedID || 
                        this.props.SelectedID=== null
                        ) 
                    {
                        if(Year === "Career"){
                            CreateNewList.push(game);   
                        }
                        else{
                            NewYear = game.Meta.Date.split("/")
                            if(Year === '20'+NewYear[2]){
                                CreateNewList.push(game);  
                            }
                        }
                       }
                })

                CreateNewList = _.orderBy(CreateNewList,['Meta.FixtureInt'],['desc'])
        
                this.setState({ 
                    Created: Math.round((new Date()).getTime() / 1000),
                    Year:Year,
                    List:CreateNewList
                })
        }

  componentWillMount() { 
        this.createList(this.props.List,this.props.UX.FORMS.SELECT.YEAR, this.props.SelectedID)
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR)
        { this.createList(this.props.List,nextProps.UX.FORMS.SELECT.YEAR,this.props.SelectedID) }
   
    } 
  render() {     
    return (
        <div>
            <Row className="PodRow Form_Selector">
               <Filter />
            </Row> 

            
            <Row className="PodRow"> 
                <PodWrapper  className="flex-100" canvas="canvas1">
                    <ListHistory 
                        Games={this.state.List}
                        isVisible={true}
                        match={ this.props.Match}
                    />
                </PodWrapper>
            </Row>
        </div>
    )
  }
} 

/**
 *  COMPONENT NOTES
 *  
 *  Complete move to Titles and Labels
 *
 * 
 */