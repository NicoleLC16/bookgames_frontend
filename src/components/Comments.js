import React from "react"
import {Segment} from 'semantic-ui-react'


const Comments = props => {

  return (
    <>
      <Segment>{props.post.content}</Segment>
    </>

  );
};

export default Comments