import React, { Component } from "react";
import { Header, Button, Message } from 'semantic-ui-react'
import Players from '../components/Players'

class PlayersContainer extends Component {

  playersCollection = () => {
    return this.props.game.users.map(user => {
     return (user.id !== this.props.host) ? <Players selectPlayer={this.props.selectPlayer} key={user.id} user={user} game={this.props.game} /> : null
    })
  }

  render() {
    return(
      <>
      <Header as="h3">Players:</Header>
      {this.playersCollection()}
      <Button color='teal' floated='right'
      disabled={this.props.loggedIn === null} 
      onClick={() => this.props.handleJoin(this.props.game)}>Join Game</Button>
      {this.props.warningMessage ? 
      <Message warning>
        <Message.Header>You are already a player/host of this game!</Message.Header>
      </Message> : null}
      </>
    )
  }
}

export default PlayersContainer