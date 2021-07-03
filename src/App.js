import './App.css';
import CreatePlayer from './CreatePlayer';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import DisplayList from './DisplayList';

// import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display1: "block", 
      display2: "none",
      display3: "none"
    };
  }
  
  home = (e) => {
    this.setState({
      display1: "block", 
      display2: "none",
      display3: "none"
    }); 
  }

  createplayer = (e) => {
      this.setState({
        display1: "none",
        display2: "block",
        display3: "none"
      }); 
  }
  
  displaylist = (e) => {
    this.setState({
      display1: "none",
      display2: "none",
      display3: "block"
    }); 
  }
  
  render(){
    return (
      <>
      {/* <Header /> */}
      <div className="App">
        <div className="buttons mt-5">
          <button type="button" className="mx-2" onClick={this.home}>Home</button>
          <button type="button" className="mx-2" onClick={this.createplayer}>Add Players</button>
          <button type="button" className="mx-2" onClick={this.displaylist}>Players List</button>
        </div>
        <div className="Welcome my-5" style={{display: this.state.display1}}>
          <h1 className="my-3">You're Welcome!</h1>
          <p className="fw-bolder">You can Itterate using above buttons</p>
        </div>
        <div className="CreatePlayer my-5"  style={{display: this.state.display2}}>
          <CreatePlayer />
        </div>
        <div className="DisplayList my-5" style={{display: this.state.display3}}>
         <DisplayList />
        </div>
      </div>
      
      {/* <Footer /> */}
      </>
    );
  }
}

export default App;
