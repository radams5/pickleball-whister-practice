import React, { Component } from 'react';


export default class SevenPlayers extends Component{
  constructor(props){
    super(props)
    this.state = {
      gameNum: 1,
      pos1: this.props.p1,
      pos2: this.props.p2,
      pos3: this.props.p3,
      pos4: this.props.p4,
      pos5: this.props.p5,
      pos6: this.props.p6,
      pos7: this.props.p7
    
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
      pos6: this.props.p6,
      pos7: this.props.p7
      })
    }
  }
  
  handleRoundSwitch7(){
   
  
    
    if(this.state.gameNum == 1){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p1,
        pos2: this.props.p5,
        pos3: this.props.p6,
        pos4: this.props.p7,
        pos5: this.props.p2,
        pos6: this.props.p3,
        pos7: this.props.p4
      })
     
    }
    else if(this.state.gameNum == 2){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p2,
        pos2: this.props.p4,
        pos3: this.props.p3,
        pos4: this.props.p7,
        pos5: this.props.p5,
        pos6: this.props.p6,
        pos7: this.props.p1
      })
    }
    else if(this.state.gameNum == 3){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p1,
        pos2: this.props.p6,
        pos3: this.props.p3,
        pos4: this.props.p5,
        pos5: this.props.p2,
        pos6: this.props.p4,
        pos7: this.props.p7
      })
     
    }
    else if(this.state.gameNum == 4){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p1,
        pos2: this.props.p6,
        pos3: this.props.p5,
        pos4: this.props.p7,
        pos5: this.props.p4,
        pos6: this.props.p2,
        pos7: this.props.p3
      })
     
    }
    else if(this.state.gameNum == 5){
      this.setState({
        gameNum: this.state.gameNum + 1,
        pos1: this.props.p6,
        pos2: this.props.p2,
        pos3: this.props.p3,
        pos4: this.props.p4,
        pos5: this.props.p5,
        pos6: this.props.p7,
        pos7: this.props.p1
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
          pos7: this.props.p7
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

        <div className="Bench">
        Bench
        <h5>{this.state.pos5}</h5>
        <h5>{this.state.pos6}</h5>
        <h5>{this.state.pos7}</h5>
        </div>
        <button onClick={() => this.handleRoundSwitch7()}>round forward</button>
        <h1>{this.state.gameNum}</h1>
      </div>
    )
  }
}
