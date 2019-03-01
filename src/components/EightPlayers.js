import React, { Component } from 'react';


export default class SixPlayers extends Component{
  constructor(props){
    super(props)
    this.state = {
      gameNum: 1,
      pos1: this.props.p8,
      pos2: this.props.p1,
      pos3: this.props.p2,
      pos4: this.props.p6,
      pos5: this.props.p3,
      pos6: this.props.p4,
      pos7: this.props.p5,
      pos8: this.props.p7
    }
  }
  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      return this.setState({
      pos1: this.props.p1,
      pos2: this.props.p2,
      pos3: this.props.p3,
      pos4: this.props.p4,
      pos5: this.props.p5,
      pos6: this.props.p4,
      pos7: this.props.p5,
      pos8: this.props.p7
      })
    }
  }
  
  handleRoundSwitch8(){
   
  
    
    if(this.state.gameNum == 1){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p8,
        pos2: this.props.p2,
        pos3: this.props.p3,
        pos4: this.props.p7,
        pos5: this.props.p4,
        pos6: this.props.p5,
        pos7: this.props.p6,
        pos8: this.props.p1
      })
     
    }
    else if(this.state.gameNum == 2){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p8,
        pos2: this.props.p3,
        pos3: this.props.p4,
        pos4: this.props.p1,
        pos5: this.props.p5,
        pos6: this.props.p6,
        pos7: this.props.p7,
        pos8: this.props.p2
      })
     
    }
    else if(this.state.gameNum == 3){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p8,
        pos2: this.props.p4,
        pos3: this.props.p5,
        pos4: this.props.p2,
        pos5: this.props.p6,
        pos6: this.props.p7,
        pos7: this.props.p1,
        pos8: this.props.p3
      })
     
    }
    else if(this.state.gameNum == 4){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p8,
        pos2: this.props.p5,
        pos3: this.props.p6,
        pos4: this.props.p3,
        pos5: this.props.p7,
        pos6: this.props.p1,
        pos7: this.props.p2,
        pos8: this.props.p4
      })
     
    }
    else if(this.state.gameNum == 5){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p8,
        pos2: this.props.p7,
        pos3: this.props.p1,
        pos4: this.props.p5,
        pos5: this.props.p2,
        pos6: this.props.p3,
        pos7: this.props.p4,
        pos8: this.props.p6
      })
     
    }
    else if(this.state.gameNum == 6){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p8,
        pos2: this.props.p1,
        pos3: this.props.p2,
        pos4: this.props.p6,
        pos5: this.props.p3,
        pos6: this.props.p4,
        pos7: this.props.p5,
        pos8: this.props.p7
      })
     
    }
  
    else{
      
        this.setState({
          gameNum: 1,
          pos1: this.props.p1,
        pos2: this.props.p2,
        pos3: this.props.p3,
        pos4: this.props.p4,
        pos5: this.props.p5,
        pos6: this.props.p6,
        pos7: this.props.p7,
        pos8: this.props.p8
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

        <div className='Court'>
          <div className='Side'>
            Court 2 Side A 
            <div className='Position'>
              <div className='Playerdiv'>{this.state.pos5}</div>
              
              <div className='Playerdiv'>{this.state.pos6}</div>
            </div>
          </div>
          <div className='SideB'>
            Court 2 Side B
            <div className='Position'>
              <div className='Playerdiv'>{this.state.pos7}</div>
              <div className='Playerdiv'>{this.state.pos8}</div>
            </div>
          </div>
        </div>

        <button onClick={() => this.handleRoundSwitch8()}>round forward</button>
        <h1>{this.state.gameNum}</h1>
      </div>
    )
  }
}
