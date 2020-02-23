import React, { Component } from 'react';
import './App.css';
// import ButtonExampleButton from './ButtonExampleButton';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {api} from './services/api'
import Signup from './components/Signup'
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    if (localStorage.getItem("token")) api.auth.getUser()
      .then(data => {
        if (data.error) {
          console.log(data.error)
          localStorage.removeItem("token")
        } else {
          this.setState({user: data.user})
          localStorage.setItem("token", data.jwt)
        }
      })
  }

  login = data => {
    this.setState({user: data.user})
    localStorage.setItem("token", data.jwt)
  }

  logout = () => {
    this.setState({user: null});
    localStorage.removeItem("token");
  };


  render () {
    return (
      <Router>
        <Route
          path="/"
          render={props => <NavBar {...props} onLogOut={this.logout}/>}
        />
        {/* <button className="ui button" role="button">Btn with Semantic-UI</button> */}
        <Route
              exact
              path="/login"
              render={props => <Login {...props} onLogin={this.login} />}
            />
        {/* <LoginForm /> */}
        <Route
              exact
              path="/signup"
              render={props => <Signup {...props} onLogin={this.login}/>} 
        />
      </Router>
    );
  }
}

export default App;
