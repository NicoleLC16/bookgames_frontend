import React from "react"
import {Segment} from 'semantic-ui-react'


const Comments = props => {
  
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

  return (
    <>
      <Segment>
        {props.users ? matchUser() : null}<br></br>
        {props.post.content}
      </Segment>
    </>

  );
};

export default Comments