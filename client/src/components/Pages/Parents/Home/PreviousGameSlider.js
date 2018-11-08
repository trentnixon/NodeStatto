import React, { Component } from 'react';

let Previous=[]
export default class PreviousGameSlider extends Component {

    componentWillMount() {  Previous = this.props.DATA.CLEAN.slice(0,10);}

  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <div id="Header_Slider" className="">
      
                {
                    Previous.map((game,i)=>{

                       // console.log(game)
                        return(
                            <div key={i}>
                                {game.Meta.Opposition}
                            </div>
                        )
                    })
                }
          
      </div>
    )
  }
} 