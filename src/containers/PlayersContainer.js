import React, { Component } from "react";
import { Header, Button } from 'semantic-ui-react'
import Players from '../components/Players'

class PlayersContainer extends Component {

  playersCollection = () => {
    return this.props.game.users.map(user => {
      return <Players key={user.id} user={user} />
    })
  }

  render() {
    return(
      <>
      <Header as="h3">Players:</Header>
      {this.playersCollection()}
      <Button color='teal' floated='right' 
      onClick={() => this.props.handleJoin(this.props.game)}>Join Game</Button>
      </>
    )
  }
}

export default PlayersContainer