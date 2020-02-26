import React, { Component } from "react";
import { Segment, Header, Container, Modal, Image, Button, Form, TextArea, Grid } from 'semantic-ui-react'  

class GameDisplay extends Component {

  getGames = () => {
    const id = this.props.match.params.id;
    let selectGame = this.props.selectedGame
    for (let game of this.props.games) {
      if (game.id === id) {
        selectGame = game;
      }
    }
    return selectGame;
  };


  gameHost = () => {
    const {host, users} = this.getGames()
    // let host = this.props.selectedGame.host
    let gHost = users.find(user => {
      return user.id === host
    })
    return gHost.name

    // let gHost = this.props.selectedGame.users.find (user => {
    //   return user.id === this.props.selectedGame.host
    // })
    // return gHost.name
  }

  playerCollection = () => {
    const {users} = this.getGames()
    return users.map(user => {
      return <Segment>{user.name}</Segment>
    })
  }

  postsCollection = () => {
    const {posts} = this.getGames()
    return posts.map(post => {
      return <Segment>{post.content}</Segment>
    })
  }

  tasksCollection = () => {
    const {tasks} = this.getGames()
    return tasks.map(task => {
      return <Grid.Column>{task}</Grid.Column>
    })
  }

  render() {
    const {title, rules, score } = this.getGames()
    // const {name, username} = this.playerCollection()

    return(
      <Container>
      <Segment clearing>
      <Header as='h2' floated='right'>
        Game Host: {this.getGames() ? this.gameHost() : null}
        {/* {this.gameHost()} */}
      </Header>
      <Header as='h2' floated='left'>
        {title}
      </Header>
    </Segment>
    <Segment>
      <Grid columns={5} celled>
        <Grid.Row>
          {this.getGames() ? this.tasksCollection() : null}
        </Grid.Row>
      </Grid>
      
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
    <Segment>
      <Header as="h3">Players:</Header>
      {this.getGames() ? this.playerCollection() : null}
        <Button color='teal' floated='right'>Join Game</Button>
    </Segment>
      <Segment>
        <Header as="h3">Score Board:</Header>
          <Segment>{score}</Segment>
            <Form>
              <TextArea placeholder='Tell us more' />
            </Form>
          <Button color='teal' floated='right'>Edit Score Board</Button>
      </Segment>
      <Segment>
        <Header as="h3">Comments And Points:</Header>
          <Segment>{this.getGames() ? this.postsCollection() : null}</Segment>
            <Form>
              <TextArea placeholder='Tell us more' />
            </Form>
          <Button color='teal' floated='right'>Submit</Button>
      </Segment>
    </Container>

    )
  }
}

export default GameDisplay