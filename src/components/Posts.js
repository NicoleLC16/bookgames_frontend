import React from "react"
import {Comment} from 'semantic-ui-react'


const Posts = props => {
  
  const matchUser = () => {
    let postUser = props.post.user_id
    // console.log(postUser)
    let userObj = props.users.find(user => {
      return user.id === postUser
    })
    // userObj = userObj || {}
    // userObj ? console.log(userObj.username) : null
    if (userObj) return userObj.username
  }

  const addBreaks = text => 
    text.split('\n')
  

  return (
    <>
    <Comment>
      <Comment.Avatar src='https://picsum.photos/35/35' />
      <Comment.Content>
        <Comment.Author>{props.users ? matchUser() : null}</Comment.Author>
        <Comment.Text>{addBreaks(props.post.content)}</Comment.Text>
      </Comment.Content>
    </Comment>
    </>

  );
};

export default Posts