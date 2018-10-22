import React, { Component } from 'react';

export default class Statto extends Component {

  componentWillMount() { console.log(this.props.DATA.CLEAN) }

  render() {
    return (
      <div>
        <h2>Items Found {this.props.DATA.CLEAN.length}</h2>
            {
                this.props.DATA.CLEAN.map((game,i)=>{
                        return(
                            <div key={i}>
                                {game.Meta.Fixture}
                            </div>
                        )
                })
            }
      </div>
    )
  }
}