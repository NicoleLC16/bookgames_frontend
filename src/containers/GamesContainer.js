import React, { Component } from "react";
import { Card, Container, Button } from 'semantic-ui-react'
import GamesCard from '../components/GamesCard'
import CreateBookGame from './CreateBookGame'

class GamesContainer extends Component {

  gamesCollection = () => {
    return this.props.games.map(game => {
      return <GamesCard game={game} 
      key={game.id} 
      handleGameSelect={this.props.handleGameSelect}/>
    })
  }

  render() {
    return(
      <Container style={{padding: "20px"}}>
      <Button disabled={this.props.user === null} onClick={() => this.props.toggleGameButton()} style={{backgroundColor: '#9a101b', color: 'white'}} >Host A New Game</Button>
      {this.props.gameForm ? 
      <CreateBookGame 
      user={this.props.user} 
      game={this.props.game} 
      updateGames={this.props.updateGames}/> : null}
      <Card.Group itemsPerRow={4} style={{padding: "20px"}}>
        {this.gamesCollection()}
      </Card.Group>
      </Container>
    )
  }
}

export default GamesContainer