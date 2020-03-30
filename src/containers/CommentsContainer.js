import React, { Component } from "react";
import { Header, Button, Form, TextArea, Message, Menu, Comment } from 'semantic-ui-react'
import Posts from '../components/Posts'

class CommentsContainer extends Component {

  state = {
    comment: "",
    type: "comment",
    activeItem: 'comments'
  }

  commentsCollection = () => {
    return this.props.game.posts.map(post => {
      return post.ctype.includes('comment') ?
      <Posts post={post} key={post.id} users={this.props.users}/> : null
    })
  }

  pointsCollection = () => {
    return this.props.game.posts.map(post => {
      return post.ctype.includes('point') ?
      <Posts post={post} key={post.id} users={this.props.users}/> : null
    })
  }

  handleCommentChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

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
            ctype: this.state.activeItem,
            user_id: this.props.user.id,
            game_id: this.props.game.id
        })
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(comment => this.props.updateComments(comment))
    .then(this.setState({
      comment: ""
    }))
    }
  // }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    return(
      <>
      {this.props.commentMessage ? 
      <Message warning>
        <Message.Header>Please Log In to comment!</Message.Header>
      </Message> : null}

      <Header as="h3">Comments And Points: </Header>

      <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field placeholder='Tell us more'
            control={TextArea}
            name="comment"
            onChange={this.handleCommentChange}
            value={this.state.comment} />
          <Button style={{backgroundColor: '#9a101b', color: 'white'}} floated='right'>Submit</Button>
        </Form>

      <Menu attached='top' tabular>
          <Menu.Item
            name='comments'
            active={activeItem === 'comments'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='point'
            active={activeItem === 'point'}
            onClick={this.handleItemClick}
          />
      </Menu>

        {this.state.activeItem === 'comments' ?
        <Comment.Group attached='bottom'>{this.commentsCollection()}</Comment.Group> : null}
        {this.state.activeItem === 'point' ?
        <Comment.Group attached='bottom'>{this.pointsCollection()}</Comment.Group> : null}
{/* 
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field placeholder='Tell us more'
            control={TextArea}
            name="comment"
            onChange={this.handleCommentChange}
            value={this.state.comment} />
          <Button color='teal' floated='right'>Submit</Button>
        </Form> */}
      </>
    )
  }
}

export default CommentsContainer