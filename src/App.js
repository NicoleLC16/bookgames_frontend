import React, { Component } from 'react';
import './App.css';
// import ButtonExampleButton from './ButtonExampleButton';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import {api} from './services/api'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import GamesContainer from './containers/GamesContainer'
import AboutPage from './components/AboutPage'
import GamesPageContainer from './containers/GamePageContainer';
import Homepage from './components/Homepage'
import Footer from './components/Footer'

class App extends Component {

  state = {
    user: null,
    games: [],
    selectedGame: [],
    users: [],
    gameForm: false
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

  updateGames = (game) => {
    this.setState(prevState => ({
      games: [...prevState.games, game],
      gameForm: !prevState.gameForm
    }))
  }

  toggleGameButton = () => {
    this.setState(prevState => ({
      gameForm: !prevState.gameForm
    }))
  }

  render () {
    return (
      <Router>
        <Container className="app-wrapper-container" raised>
        <Route
          path="/"
          render={props => <NavBar {...props} 
          onLogOut={this.logout}
          user={this.state.user}/>}
        />
        <Route
          exact
          path="/"
          render={props => <Homepage {...props} />}
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
              handleGameSelect={this.gameSelect}
              user={this.state.user}
              updateGames={this.updateGames}
              gameForm={this.state.gameForm}
              toggleGameButton={this.toggleGameButton}/>} 
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
        <Route
              path="/"
              render={props => <Footer {...props} 
              />}
        />
        </Container>
      </Router>
    );
  }
}

export default App;
