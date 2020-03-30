import React from "react"
import { Header, Button, Segment} from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


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
    <Button.Group>
    <Button as={NavLink} to='/signup' style={{backgroundColor: '#9a101b', color: 'white'}} size='large'>Sign Up</Button>
    <Button.Or />
    <Button as={NavLink} to='/login' style={{backgroundColor: '#9a101b', color: 'white'}} size='large'>Log In</Button>
    </Button.Group>
  </div>
  <Segment className="info-frontpage" style={{border: 'solid 1px transparent'}} placeholder textAlign='center'>
    <Header as='h2'>What is Book Games?</Header>
    <p className="frontpage-p-text-size ">Play or host book bingo with other book enthusiasts!<br></br> Match a book you read with the criteria on the board and get points depending on the host rules!</p>
    <p className="frontpage-p-text-size">Want to learn more? Checkout this <a className="link-frontpage" href='/about'>page</a> to learn more about books and games!</p>
    <p className="frontpage-p-text-size">Or checkout games that are currently being hosted <a className="link-frontpage" href='/games'>here</a>!</p>
  </Segment>

    </>

  );
};

export default Homepage