import React from "react"
import { Header, List, Grid, Icon, Button, Segment, Container} from 'semantic-ui-react'
import { Link } from "react-router-dom"


const Homepage = props => {
  // const { id, host, title } = props.game

  // const gameHost = () => {
    
  //   let ghost = props.game.users.find (user => {
  //     return user.id === host
  //   })
  //   return ghost.name
  // }

  return (
    <>
  <div className='frontpage-banner'>
    <div className="frontpage-header">
      Welcome to Book Games!
    </div>
    <p className='home-message'><b>New here? <a className="link-frontpage" href='/signup'>Sign Up</a>! Otherwise <a className='link-frontpage' href='/login'>Log In</a>!</b></p>
    <Button primary>Add Document</Button>
  </div>
  <Segment className="info-frontpage" style={{border: 'solid 1px transparent'}} placeholder textAlign='center'>
    <Header>What is Book Games?</Header>
    <p>Play or host book bingo with other book enthusiats!<br></br> Match a book you read with the criteria on the board and get points depending on the host rules!</p>
    <p>Want to learn more? Checkout this <a className="link-frontpage" href='/about'>page</a> to learn more about books and games!</p>
  </Segment>

    </>

  );
};

export default Homepage