import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';

import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import Validation from './components/Validation/Validation';
import Char from './components/Char/Char';

// import Radium, {StyleRoot} from 'radium';


class App extends Component {

  state = {
    username: 'superkatja',
    userInput: ''
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    }); 
  }

  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
    // console.log(this.state);
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      userInput:updatedText
    });
  }


  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)} />;
    })
    return (
      <div className="App">
        <h1>Check check</h1>
        <UserInput usernameChange = {this.usernameChangeHandler} currentName = {this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Miki' />
        <input
        type='text'
        onChange={this.inputChangeHandler} 
        value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation  inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
