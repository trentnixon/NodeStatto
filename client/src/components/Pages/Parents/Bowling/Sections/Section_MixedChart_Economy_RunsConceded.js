import React, { Component } from 'react';

// Template
import Row from "../../../../Template/Page/Row";
import Pod from "../../../../Elements/pods/Pod_Outer_Wrapper";
// import Title from "../../../../Elements/type/PageTitle";

// Actions
import {BowlingBasics, FindDataSeries, CreateLabelData} from "../../../../../actions/UI";

// Sections
//import InteractiveScatterChart from "../../../../Charts/ScatterChart";
import InteractiveChart from "../../../../Charts/MixedChart";

// Variables
let DataSeries=[],DataLabels =[];

// Start Class
export default class Section_Default extends Component {
    state = {
        Series:[],
        Labels:[]
      }
      // Create Data Series
      createSeries(DATA, Neddle){  

        let ReturnedSeries = BowlingBasics(FindDataSeries(DATA,Neddle));
         DataLabels = CreateLabelData(DATA,Neddle)
 
                    DataSeries = [{
                        name: 'Average',
                        type: 'area',
                        data: ReturnedSeries[12]
                    },{
                        name: 'Economy',
                        type: 'area',
                        data: ReturnedSeries[8]
                    },{
                        name: 'Strike Rate',
                        type: 'area',
                        data: ReturnedSeries[10]
                    }
                    ]

                this.setState({  
                    Series:DataSeries,
                    Labels:DataLabels,
                })
        }

        componentWillMount() { 
            this.createSeries(this.props.DATA,this.props.UX.FORMS.SELECT.YEAR)             
        } 
        shouldComponentUpdate(nextProps, nextState){ return true;}
        componentWillUpdate(nextProps, nextState){
            if(this.props.UX.FORMS.SELECT.YEAR !== nextProps.UX.FORMS.SELECT.YEAR)
            { this.createSeries(this.props.DATA,nextProps.UX.FORMS.SELECT.YEAR) }
        }
    
    render() {
        console.log(this.state.Labels) 
        return ( 
            <Row className="PodRow">
                    <Pod canvas="canvas1 " className="flex-100">
                        <InteractiveChart
                            Labels={this.state.Labels}
                            series={this.state.Series}
                        />
                    </Pod>
            </Row> 
        ) 
    }
} 