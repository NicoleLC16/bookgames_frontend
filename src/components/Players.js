import React from "react"
import { Segment } from 'semantic-ui-react'


const Players = props => {

  const displayPlayerBoard = () => {
    console.log(props.game)
  }

  return (
    <>
    <Segment onClick={displayPlayerBoard()}>
    {props.user.username}<br></br>  
    Name: {props.user.name}
    </Segment>
    </>

  );
};

export default Players