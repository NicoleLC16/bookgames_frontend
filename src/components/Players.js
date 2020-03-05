import React from "react"
import { Segment, Header } from 'semantic-ui-react'


const Players = props => {

  const handleSelect = () => {
    props.selectPlayer(props.user.id)
  }
  return (
    <>
    <Segment onClick={handleSelect} className='player-block' raised>
    <Header as='h5'>{props.user.username}</Header>
    Name: {props.user.name}
    </Segment>
    </>

  );
};

export default Players