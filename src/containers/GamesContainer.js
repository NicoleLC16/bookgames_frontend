import React, { Component } from "react";
import { Card, Container } from 'semantic-ui-react'
import GamesCard from '../components/GamesCard'

class GamesContainer extends Component {

  gamesCollection = () => {
    // if (this.props.games)
    return this.props.games.map(game => {
      return <GamesCard game={game} 
      key={game.id} 
      handleGameSelect={this.props.handleGameSelect}/>
    })
  }
  render() {
    return(
      <Card.Group itemsPerRow={4}>
        {this.gamesCollection()}
      </Card.Group>
    )
  }
}

export default GamesContainer