import React from "react"
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import redandblue from '../cardImages/redandbluebooks.png'
import heartbooks from '../cardImages/hearbooks.jpg'
import veschwab from '../cardImages/veschwab.jpg'
import alicezombie from '../cardImages/aliceinzombieland.jpg'
import daenerys from '../cardImages/daenerys.jpg'
import harrypotter from '../cardImages/harrypotterpurple.jpg'
import rainbow from '../cardImages/rainbowbook.jpg'
import reading from '../cardImages/readingbook.jpg'

const GamesCard = props => {
  const { id, host, title } = props.game

  const gameHost = () => {
    
    let ghost = props.game.users.find (user => {
      return user.id === host
    })
    console.log(ghost)
    return ghost.name
  }

  const cImages = [heartbooks, redandblue, veschwab, alicezombie, daenerys, harrypotter, rainbow, reading]

  // const randImage = () => {
  //   return cImages.random(image => {
  //     return <Image src={image} wrapped ui={false} as={Link} to={`/games/${id}`} />
  //   })
  // }

  const randImage = () => {
    let ind = Math.floor(Math.random() * cImages.length)
    let rImage = cImages[ind]
    console.log(rImage)
    return <Image className='game-card-image' src={rImage} wrapped ui={false} />
  }

  return (
    <Card raised as={Link} to={`/games/${id}`} >
      {/* onClick={() => props.handleGameSelect(props.game)} */}
      {/* process.env.PUBLIC_URL + "cardImages" + "/veschwab.jpg" */}
      {/* <Image src={randImage()} wrapped ui={false} as={Link} to={`/games/${id}`} /> */}
      {randImage()}
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>Game Host: {gameHost()}</Card.Description>
      </Card.Content>
    </Card>

  );
};

export default GamesCard