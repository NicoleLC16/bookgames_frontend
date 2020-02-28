import React, { Component } from 'react';
import './App.css';
// import ButtonExampleButton from './ButtonExampleButton';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {api} from './services/api'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import GamesContainer from './containers/GamesContainer'
import AboutPage from './components/AboutPage'
import GamesPageContainer from './containers/GamePageContainer';

class App extends Component {

  state = {
    user: null,
    games: [],
    selectedGame: [],
    users: []
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
    this.fetchGames()
    this.fetchUsers()
  }

  fetchGames = () => {
    fetch(`http://localhost:3000/games`)
    .then(res => res.json())
    .then(data => this.setState({
      games: data
    }))
  }

  fetchUsers = () => {
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(data => this.setState({
      users: data
    }))
  }


  login = data => {
    this.setState({user: data.user})
    localStorage.setItem("token", data.jwt)
  }

  logout = () => {
    this.setState({user: null});
    localStorage.removeItem("token");
  };

  gameSelect = (game) => {
    this.setState({
      selectedGame: game
    })
  }

  render () {
    return (
      <Router>
        <Route
          path="/"
          render={props => <NavBar {...props} 
          onLogOut={this.logout}/>}
        />
        <Route
              exact
              path="/login"
              render={props => <Login {...props} 
              onLogin={this.login} />}
            />
        <Route
              exact
              path="/signup"
              render={props => <Signup {...props} 
              onLogin={this.login}
              fetchUsers={this.fetchUsers}/>} 
        />
        <Route
              exact
              path="/games"
              render={props => <GamesContainer {...props} 
              games={this.state.games} 
              handleGameSelect={this.gameSelect}/>} 
        />
        <Route
              exact
              path="/about"
              render={props => <AboutPage {...props} 
              />} 
        />
        <Route
              path="/games/:id"
              render={props => <GamesPageContainer {...props} 
              selectedGame={this.state.selectedGame}
              user={this.state.user} 
              users={this.state.users}
              games={this.state.games}/> } 
        />
      </Router>
    );
  }
}

export default App;
