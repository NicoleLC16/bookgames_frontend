import React from "react"
import { Segment } from 'semantic-ui-react'


const Players = props => {

  return (
    <>
    <Segment>
    {props.user.username}<br></br>  
    Name: {props.user.name}
    </Segment>
    </>

  );
};

export default Players