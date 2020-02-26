import React, { Component } from "react";
import { Header, Button, Segment, Form, TextArea } from 'semantic-ui-react'
import Comments from '../components/Comments'

class CommentsContainer extends Component {

  postsCollection = () => {
    return this.props.game.posts.map(post => {
      return <Comments post={post} key={post.id}/>
    })
  }

  render() {
    return(
      <>
      <Header as="h3">Comments And Points: </Header>
        <Segment>{this.postsCollection()}</Segment>
        <Form>
          <TextArea placeholder='Tell us more' />
        </Form>
        <Button color='teal' floated='right'>Submit</Button>
      </>
    )
  }
}

export default CommentsContainer