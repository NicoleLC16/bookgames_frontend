import React from "react"
import { Header, List, Grid, Segment, Container} from 'semantic-ui-react'
import { NavLink } from "react-router-dom"


const Footer = props => {

  return (
    <>

  <Segment inverted vertical style={{ padding: '4em 4em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Internal Links' />
              <List link inverted>
                <List.Item as={NavLink} to='/login'>Login</List.Item>
                <List.Item as={NavLink} to='/signup'>Sign up</List.Item>
                <List.Item as={NavLink} to='/about'>About</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='External Links' />
              <List link inverted>
                <List.Item a href='https://www.linkedin.com/in/nicole-cabral-b2416219a/'>Linked In</List.Item>
                <List.Item a href='https://www.goodreads.com/user/show/48391432-nicole-s-book-diaries'>GoodReads</List.Item>
                <List.Item a href='https://www.instagram.com/nicolesbookdiaries/?hl=en'>Instagram</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Happy Reading
              </Header>
              <p>
                More games to come in the future!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    </>

  );
};

export default Footer