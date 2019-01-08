import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Slider from "react-slick";
import sizeMe from 'react-sizeme';


let Previous=[], Runs,Balls, Fig,Overs;
class PreviousGameSlider extends Component {

  componentWillMount() { 
    Previous = this.props.DATA.CLEAN.slice(Math.max(this.props.DATA.CLEAN.length - 10, 1)).reverse();
  }

  render() {
   
    
    const { width, height } = this.props.size

    console.log(width,height );

    let  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
  
      };

      
    return (
      <div id="Header_Slider" className="container-fluid" style={{
        width: width + "px",
       
      }} >
        <Slider {...settings}>
                    {
                        Previous.map((game,i)=>{

                        console.log(game)
                          if(game.Batting){
                              Runs = game.Batting.RunsValue;
                              Balls = game.Batting.BallsFaced
                          }
                          if(game.Bowling){
                            Fig = game.Bowling.Figures;
                            Overs = game.Bowling.Overs
                        }
                          

                            return(
                                <div key={i} >
                                  <div className="row">
                                  <div className="Previous-header col-12">
                                          <h1>{game.Meta.Opposition}</h1>
                                          <h3>{game.Meta.Team}</h3>
                                          
                                  </div>
                                  <div className="Previous-subheader col-12">
                                          <h3>Played # Days Ago</h3>
                                    </div>
                                    <div className="col-5 nopadding details">
                                          <h3>Runs : {Runs}</h3>
                                          <h4> {Balls} Balls</h4>
                                    </div>
                                    <div className="col-7 nopadding details">
                                          <h3>Figures : {Fig}</h3>
                                          <h4>{Overs} Overs</h4>
                                    </div>
                                      <div className="col-12 nopadding  scorecard">
                                        
                                      <Link to={`/${this.props.match.params.playerid}/scorecard/${game.Meta.Fixture}`}>
                                        <Button 
                                            variant="contained" 
                                            color="primary" 
                                            
                                        >Scorecard
                                         
                                            
                                        </Button>
                                        </Link>
                                    </div>
                                  </div>
                                  </div>
                            )
                        })
                    }
        </Slider>
      </div>
    )
  }
} 

export default sizeMe({ monitorHeight: true })(PreviousGameSlider)