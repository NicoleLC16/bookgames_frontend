import React, { Component } from "react";
import { Header, Button, Segment, Form, TextArea, Message } from 'semantic-ui-react'
import Comments from '../components/Comments'

class CommentsContainer extends Component {

  state = {
    comment: "",
    type: "comment"
  }

  postsCollection = () => {
    return this.props.game.posts.map(post => {
      return <Comments post={post} key={post.id} users={this.props.users}/>
    })
  }

  handleCommentChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

// matchUserId = () => {
//   let postUser = this.props.posts.map(post => {
//     return post.user_id
//   })
//   // console.log(postUser)
//   let userObj = this.props.users.find(user => {
//     return user.id === postUser
//   })
//   // userObj = userObj || {}
//   // userObj ? console.log(userObj.username) : null
//   if (userObj) return userObj.id
// }

  handleSubmit = (e) => {
    e.preventDefault()
    if (localStorage.length === 0) {
      this.props.commentsLogin()
    }
    else {
    fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify({
            content: this.state.comment,
            ctype: this.state.type,
            user_id: this.props.user.id,
            game_id: this.props.game.id
        })
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(comment => this.props.updateComments(comment))
    }
  // }
  }

  // addComment = (comment) => {
  //   let postsCollection = this.props.game.posts
  //   postsCollection.push(comment)

  // }

  render() {
    return(
      <>
      {this.props.commentMessage ? 
      <Message warning>
        <Message.Header>Please Log In to comment!</Message.Header>
      </Message> : null}
      <Header as="h3">Comments And Points: </Header>
        <Segment>{this.postsCollection()}</Segment>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field placeholder='Tell us more'
            control={TextArea}
            name="comment"
            onChange={this.handleCommentChange}
            value={this.state.comment} />
          <Button color='teal' floated='right'>Submit</Button>
        </Form>
      </>
    )
  }
}

export default CommentsContainer