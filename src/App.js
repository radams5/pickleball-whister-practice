import React, { Component } from 'react';
import './App.css'
import FourPlayers from './components/FourPlayers';
import FivePlayers from './components/FivePlayers';
import SixPlayers from './components/SixPlayers';
import SevenPlayers from './components/SevenPlayers';
import EightPlayers from './components/EightPlayers';


class App extends Component {
constructor(){
  super()
  this.state ={

      p1: 'Bob',
      p2: 'Shonda',
      p3: 'Not Bob',
      p4: 'Not Shonda',
      p5: 'Jake',
      p6: 'Harley',
      p7: 'Steve',
      p8: 'Shanda2', 
      round: 1,
      numofPlayers: 0
  }
}


handlePlayerNumInput(val){
  this.setState({
    numofPlayers: val
  })
}
handlePlayerName1(val){
  this.setState({   
      p1: val    
  })
}
handlePlayerName2(val){
  this.setState({   
      p2: val    
  })
}
handlePlayerName3(val){
  this.setState({   
      p3: val    
  })
}
handlePlayerName4(val){
  this.setState({   
      p4: val    
  })
}
handlePlayerName5(val){
  this.setState({   
      p5: val    
  })
}
handlePlayerName6(val){
  this.setState({   
      p6: val    
  })
}
handlePlayerName7(val){
  this.setState({   
      p7: val    
  })
}
handlePlayerName8(val){
  this.setState({   
      p8: val    
  })
}


handlePlayerNumber(){
  
    if (this.state.numofPlayers == 4){
     return <div>
       <input placeholder='player 1' onChange={e => this.handlePlayerName1(e.target.value)}/>
       <input placeholder='player 2' onChange={e => this.handlePlayerName2(e.target.value)}/>
       <input placeholder='player 3' onChange={e => this.handlePlayerName3(e.target.value)}/>
       <input placeholder='player 4' onChange={e => this.handlePlayerName4(e.target.value)}/>
      
      <FourPlayers 
        p1={this.state.p1 } 
        p2={this.state.p2 } 
        p3={this.state.p3 } 
        p4={this.state.p4 } 
        round={this.state.round}
        numofPlayers={this.state.numofPlayers}
        
      />
    </div>
    }
     else if(this.state.numofPlayers == 5){
      return <div>
       <input placeholder='player 1' onChange={e => this.handlePlayerName1(e.target.value)}/>
       <input placeholder='player 2' onChange={e => this.handlePlayerName2(e.target.value)}/>
       <input placeholder='player 3' onChange={e => this.handlePlayerName3(e.target.value)}/>
       <input placeholder='player 4' onChange={e => this.handlePlayerName4(e.target.value)}/>
       <input placeholder='player 5' onChange={e => this.handlePlayerName5(e.target.value)}/>

      <FivePlayers 
      p1={this.state.p1 } 
      p2={this.state.p2 } 
      p3={this.state.p3 } 
      p4={this.state.p4 }          
      p5={this.state.p5 }          
      round={this.state.round}
      numofPlayers={this.state.numofPlayers}
    />
    </div>
    }
    else if(this.state.numofPlayers == 6){
     return <div>
      <input placeholder='player 1' onChange={e => this.handlePlayerName1(e.target.value)}/>
      <input placeholder='player 2' onChange={e => this.handlePlayerName2(e.target.value)}/>
      <input placeholder='player 3' onChange={e => this.handlePlayerName3(e.target.value)}/>
      <input placeholder='player 4' onChange={e => this.handlePlayerName4(e.target.value)}/>
      <input placeholder='player 5' onChange={e => this.handlePlayerName5(e.target.value)}/>
      <input placeholder='player 6' onChange={e => this.handlePlayerName6(e.target.value)}/>
       
    <SixPlayers 
      p1={this.state.p1 } 
      p2={this.state.p2 } 
      p3={this.state.p3 } 
      p4={this.state.p4 } 
      p5={this.state.p5 } 
      p6={this.state.p6 } 
      round={this.state.round}
      numofPlayers={this.state.numofPlayers}
    />
    </div>
    }
    else if(this.state.numofPlayers == 7){
      return <div>
      <input placeholder='player 1' onChange={e => this.handlePlayerName1(e.target.value)}/>
      <input placeholder='player 2' onChange={e => this.handlePlayerName2(e.target.value)}/>
      <input placeholder='player 3' onChange={e => this.handlePlayerName3(e.target.value)}/>
      <input placeholder='player 4' onChange={e => this.handlePlayerName4(e.target.value)}/>
      <input placeholder='player 5' onChange={e => this.handlePlayerName5(e.target.value)}/>
      <input placeholder='player 6' onChange={e => this.handlePlayerName6(e.target.value)}/> 
      <input placeholder='player 7' onChange={e => this.handlePlayerName7(e.target.value)}/> 
        
      <SevenPlayers 
      p1={this.state.p1 } 
      p2={this.state.p2 } 
      p3={this.state.p3 } 
      p4={this.state.p4 } 
      p5={this.state.p5 } 
      p6={this.state.p6 } 
      p7={this.state.p7 } 
      round={this.state.round}
      numofPlayers={this.state.numofPlayers}
    />
    </div>
    }
    else if(this.state.numofPlayers == 8){
      return <div>
      <input placeholder='player 1' onChange={e => this.handlePlayerName1(e.target.value)}/>
      <input placeholder='player 2' onChange={e => this.handlePlayerName2(e.target.value)}/>
      <input placeholder='player 3' onChange={e => this.handlePlayerName3(e.target.value)}/>
      <input placeholder='player 4' onChange={e => this.handlePlayerName4(e.target.value)}/>
      <input placeholder='player 5' onChange={e => this.handlePlayerName5(e.target.value)}/>
      <input placeholder='player 6' onChange={e => this.handlePlayerName6(e.target.value)}/> 
      <input placeholder='player 7' onChange={e => this.handlePlayerName7(e.target.value)}/> 
      <input placeholder='player 8' onChange={e => this.handlePlayerName8(e.target.value)}/> 

      <EightPlayers 
      p1={this.state.p1 } 
      p2={this.state.p2 } 
      p3={this.state.p3 } 
      p4={this.state.p4 } 
      p5={this.state.p5 } 
      p6={this.state.p6 } 
      p7={this.state.p7 } 
      p8={this.state.p8 } 
      round={this.state.round}
      numofPlayers={this.state.numofPlayers}
    />
    </div>
    }
    
    
    
    
}

  render() {
    return (
      <div className="App">
      <input placeholder='# of players' onChange={e => this.handlePlayerNumInput(e.target.value)}/>
      <h2>{this.state.numofPlayers}</h2>
      {this.handlePlayerNumber()}
      
      
      
    
      </div>
    );
  }
}

export default App;
