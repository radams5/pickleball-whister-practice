import React, { Component } from 'react';


export default class FivePlayers extends Component{
  constructor(props){
    super(props)
    this.state = {
      gameNum: 1,
      pos1: this.props.p1,
      pos2: this.props.p2,
      pos3: this.props.p3,
      pos4: this.props.p4,
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      return this.setState({
      pos1: this.props.p1,
      pos2: this.props.p2,
      pos3: this.props.p3,
      pos4: this.props.p4
      })
    }
  }
  
  handleRoundSwitch4(){
   
  
    
    if(this.state.gameNum == 1){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p1,
        pos2: this.props.p4,
        pos3: this.props.p2,
        pos4: this.props.p3,
      })
     
    }
    else if(this.state.gameNum == 2){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p1,
        pos2: this.props.p3,
        pos3: this.props.p4,
        pos4: this.props.p2,
      })
     
    }
    else {
      this.setState({
        gameNum: 1,
        pos1: this.props.p1,
        pos2: this.props.p2,
        pos3: this.props.p3,
        pos4: this.props.p4,
      })
     alert('start over')
    }
   
 
  }

  
  render(){
      
      
    return(
      <div className='Courts'>
         
        <div className='Court'>
          <div className='Side'>
            Side A
            <div className='Position'>
              <div className='Playerdiv'>{this.state.pos1}</div>
              
              <div className='Playerdiv'>{this.state.pos2}</div>
            </div>
          </div>
          <div className='SideB'>
            Side B
            <div className='Position'>
              <div className='Playerdiv'>{this.state.pos3}</div>
              <div className='Playerdiv'>{this.state.pos4}</div>
            </div>
          </div>
        </div>

        <button onClick={() => this.handleRoundSwitch4()}>round forward</button>
        <h1>{this.state.gameNum}</h1>
      </div>
    )
  }
}