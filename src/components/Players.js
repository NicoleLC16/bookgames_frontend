import React from "react"
import { Segment } from 'semantic-ui-react'


const Players = props => {

  const handleSelect = () => {
    props.selectPlayer(props.user.id)
  }
  return (
    <>
    <Segment onClick={handleSelect}>
    {props.user.username}<br></br>  
    Name: {props.user.name}
    </Segment>
    </>

  );
};

export default Players