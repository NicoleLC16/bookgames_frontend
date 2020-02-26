import React, { Component } from "react";
import { Segment, Header, Container, Modal, Image, Button, Grid } from 'semantic-ui-react'
import ScoreBoard from './ScoreBoard' 
import PlayersContainer from '../containers/PlayersContainer' 
import CommentsContainer from '../containers/CommentsContainer' 

class GamePage extends Component {

  render() {
    const {title, rules, score } = this.props.game

    return(
    <Container>
      {/* title and host */}
      <Segment clearing>
        <Header as='h2' floated='right'>
          Game Host: {this.props.gameHost()}
        </Header>
        <Header as='h2' floated='left'>
          {title}
        </Header>
      </Segment>
      {/* Board */}
      <Segment>
        <Grid columns={5} celled>
          <Grid.Row>
            {this.props.tasksCollection()}
          </Grid.Row>
        </Grid>
      {/* Rules Modal */}
        <Modal trigger={<Button>Rules</Button>} floated='left'>
          <Modal.Header>Game Rules</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='https://picsum.photos/250' />
              <Modal.Description>
                <Header>{`Rules for: ${title} Game`}</Header>
              <p>
                {rules}
              </p>
              </Modal.Description>
            </Modal.Content>
        </Modal>
      </Segment>
      {/* Players */}
      <Segment>
        <PlayersContainer game={this.props.game} handleJoin={this.props.handleJoin}/>
      </Segment>
      {/* ScoreBoard */}
      <Segment>
        <ScoreBoard score={score} />
      </Segment>
      {/* Comments and Post Points */}
      <Segment>
        <CommentsContainer game={this.props.game}/>
      </Segment>
    </Container>

    )
  }
}

export default GamePage


// border-bottom: 1px solid black;

