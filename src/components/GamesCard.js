import React from "react"
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"


const GamesCard = props => {
  const { id, host, title } = props.game

  const gameHost = () => {
    
    let ghost = props.game.users.find (user => {
      return user.id === host
    })
    console.log(ghost)
    return ghost.name
  }

  return (
    <Card padded='true'>
      {/* onClick={() => props.handleGameSelect(props.game)} */}
      <Image src="https://picsum.photos/250" wrapped ui={false} as={Link} to={`/games/${id}`} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>Game Host: {gameHost()}</Card.Description>
      </Card.Content>
    </Card>

  );
};

export default GamesCard