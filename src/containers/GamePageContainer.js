import React, { Component } from "react";
// import { Segment, Grid } from 'semantic-ui-react'
import GamePage from '../components/GamePage'
import { api } from "../services/api";
// import Comments from '../components/Comments'  
import Tasks from '../components/Tasks'    

class GamesPageContainer extends Component {

  state = {
    game: null,
    commentField: "",
    scoreField: "",
    warningMessage: false,
    commentMessage: false,
    selectedPlayer: null,
    showScore: false
  }
      
  componentDidMount() {
    let id = parseInt(this.props.match.params.id)
    api.game.getGame(id)
      .then(game => {
        this.setState({
        game: {...game, tasks: JSON.parse(game.tasks)}, 
        scoreField: game.score,
        commentSection: game.posts
      })})
  }

  showGame = () => {
    return <GamePage 
    key={this.state.game.id}
    game={this.state.game}
    gameHost={this.gameHost}
    tasksCollection={this.tasksCollection}
    handleJoin={this.joinGame}
    user={this.props.user}
    users={this.props.users}
    scoreField={this.state.scoreField}
    handleEditInput={this.handleEditInput}
    updateState={this.updateState}
    updateComments={this.updateComments}
    warningMessage={this.state.warningMessage}
    commentsLogin={this.commentsLogin}
    commentMessage={this.state.commentMessage}
    selectPlayer={this.selectPlayer}
    showScore={this.state.showScore}
    showEditScore={this.showEditScore}
    updateStateScore={this.updateStateScore}
    />
  }

  selectPlayer= (playerId) => {
    this.setState({
      selectedPlayer: playerId
    })
  }

  updateComments = (comment) => {
    let newPosts = this.state.game
    newPosts.posts.push(comment)
    this.setState({
      game: newPosts
    })
  }


  gameHost = () => {
    let host = this.state.game.host
    // console.log(host)
    let gHost = this.state.game.users.find(user => {
      return user.id === host
    })
    return gHost.name
  }

  tasksCollection = () => {
    let taskIds = Object.keys(this.state.game.tasks)
    return taskIds.map(taskId => {
      return  <Tasks 
      key={taskId}
      task={this.state.game.tasks[taskId]} 
      selectedPlayer={this.state.selectedPlayer} 
      game={this.state.game}
      updateState={this.updateState}
      user={this.props.user}
      />
    })
  }

  showEditScore = () => {
    this.setState(prevState => ({
      showScore: !prevState.showScore
    }))
  }

  updateStateScore = (newGame) => {
    this.setState(prevState => ({
      game: newGame,
      showScore: !prevState.showScore
    }))
  }

  handleEditInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  commentsLogin = () => {
    this.setState(prevState => ({
      commentMessage: !prevState.commentMessage
    }))
  }


  joinGame = (game) => {
    // console.log(game.id)
    // console.log(this.props.user)
    let playerMatch = this.state.game.users.find(eachUser => {
      return eachUser.id === this.props.user.id
    })
    if (playerMatch) {
      this.setState(prevState => ({
        warningMessage: !prevState.warningMessage
      }))
    }
    else {
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
    .then(game => ({...game, tasks: JSON.parse(game.tasks)}))
    .then(game => this.updateState(game))
    }
  }

  updateState = (newGame) => {
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