import React from "react"
import { Header, Segment, Button, Form, TextArea } from 'semantic-ui-react'


const ScoreBoard = props => {

  return (
    <>
        <Header as="h3">Score Board:</Header>
          <Segment>{props.score}</Segment>
            <Form>
              <TextArea placeholder='Tell us more' />
            </Form>
          <Button color='teal' floated='right'>Edit Score Board</Button>
    </>

  );
};

export default ScoreBoard