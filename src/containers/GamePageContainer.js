import React, { Component } from "react";
// import { Segment, Grid } from 'semantic-ui-react'
import GamePage from '../components/GamePage'
import { api } from "../services/api";
// import Comments from '../components/Comments'  
import Tasks from '../components/Tasks'    

class GamesPageContainer extends Component {

  state = {
    game: null
  }

  componentDidMount() {
    let id = parseInt(this.props.match.params.id)
    console.log(id)
    api.game.getGame(id)
      .then(game => this.setState({
        game: game
      }, () => console.log(game)))
  }

  showGame = () => {
    return <GamePage 
    game={this.state.game}
    gameHost={this.gameHost}
    tasksCollection={this.tasksCollection}
    handleJoin={this.joinGame}/>
  }

  gameHost = () => {
    let host = this.state.game.host
    console.log(host)
    let gHost = this.state.game.users.find(user => {
      return user.id === host
    })
    return gHost.name
  }

  tasksCollection = () => {
    return this.state.game.tasks.map(task => {
      return  <Tasks task={task} />
    })
  }

  joinGame = (game) => {
    console.log(game.id)
    console.log(this.props.user)
    fetch(`http://localhost:3000/join_game`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        game_id: game.id
      })
    }).then(res => res.json())
    .then(game => this.updatePlayers(game))
  }

  updatePlayers = (newGame) => {
    this.setState({
      game: newGame
    })
  }



  render() {
    return(
      <>
      {this.state.game ? this.showGame(): null }
      </>
    )
  }
}

export default GamesPageContainer