import React, { Component } from "react";
import { Segment, Header, Container, Modal, Image, Button, Grid } from 'semantic-ui-react'
import ScoreBoard from './ScoreBoard' 
import PlayersContainer from '../containers/PlayersContainer' 
import CommentsContainer from '../containers/CommentsContainer' 

class GamePage extends Component {

  render() {
    const {game, game: {title, rules, score, host}} = this.props

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
      <Segment.Group horizontal>
      <Segment className='board-segment'>
        <Grid columns={5} celled>
          <Grid.Row className='game-board'>
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
        <PlayersContainer host={host} game={this.props.game} handleJoin={this.props.handleJoin} warningMessage={this.props.warningMessage}/>
      </Segment>
      </Segment.Group>
      <Segment.Group horizontal>
      {/* Comments and Post Points */}
      <Segment>
        <CommentsContainer commentMessage={this.props.commentMessage} commentsLogin={this.props.commentsLogin} updateComments={this.props.updateComments} game={this.props.game} users={this.props.users} user={this.props.user} cf={this.props.cf}/>
      </Segment>
      {/* ScoreBoard */}
      <Segment className='score-board-segment'>
        <ScoreBoard updateState={this.props.updateState} score={score} scoreField={this.props.scoreField} handleEditInput={this.props.handleEditInput} game={game}/>
      </Segment>
      </Segment.Group>
    </Container>

    )
  }
}

export default GamePage


// border-bottom: 1px solid black;

