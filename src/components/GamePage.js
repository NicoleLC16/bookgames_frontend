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
      <Segment clearing style={{marginBottom: '0px'}}>
        <Header as='h2' floated='right'>
          Game Host: {this.props.gameHost()}
        </Header>
        <Header as='h2' floated='left'>
          {title}
        </Header>
      </Segment>      
      {/* Board */}
      <Segment.Group horizontal raised style={{marginTop: '0px', marginBottom: '0px'}}>
      <Segment className='board-segment' raised>
      {/* Rules Modal */}
      <Modal trigger={<Button style={{backgroundColor: '#9a101b', color: 'white'}}>Rules</Button>} floated='left'>
        <Modal.Header>Game Rules</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://picsum.photos/250' />
          <Modal.Description>
              <Header>{`Rules for: ${title} Game`}</Header>
            <p style={{whiteSpace: 'pre-wrap', marginBottom: '10px'}}>
              {rules}
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
        <Grid columns={5} celled>
          <Grid.Row className='game-board'>
            {this.props.tasksCollection()}
          </Grid.Row>
        </Grid>
      </Segment>
      {/* Players */}
      <Segment>
        <PlayersContainer 
        selectPlayer={this.props.selectPlayer} 
        host={host} game={this.props.game} 
        handleJoin={this.props.handleJoin} 
        warningMessage={this.props.warningMessage}
        loggedIn={this.props.user}/>
      </Segment>
      </Segment.Group>
      <Segment.Group horizontal style={{marginTop: '0px'}}>
      {/* Comments and Post Points */}
      <Segment className='posts-segment'>
        <CommentsContainer 
        commentMessage={this.props.commentMessage} 
        commentsLogin={this.props.commentsLogin} 
        updateComments={this.props.updateComments} 
        game={this.props.game} 
        users={this.props.users} 
        user={this.props.user} cf={this.props.cf}/>
      </Segment>
      {/* ScoreBoard */}
      <Segment className='score-board-segment'>
        <ScoreBoard 
        showScore={this.props.showScore}
        score={score} scoreField={this.props.scoreField} 
        handleEditInput={this.props.handleEditInput} 
        game={game}
        showEditScore={this.props.showEditScore}
        updateStateScore={this.props.updateStateScore}
        user={this.props.user}/>
      </Segment>
      </Segment.Group>
    </Container>

    )
  }
}

export default GamePage


// border-bottom: 1px solid black;

