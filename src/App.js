import React, { Component } from 'react';
import './App.css';
import ButtonExampleButton from './ButtonExampleButton';
import LoginForm from './components/LoginForm'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hi</h1>
        <ButtonExampleButton />
        <button class="ui button" role="button">Btn with Semantic-UI</button>
        <LoginForm />
      </div>
    );
  }
}

export default App;
