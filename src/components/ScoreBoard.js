import React from "react"
import { Header, Segment, Button, Form, TextArea } from 'semantic-ui-react'


const ScoreBoard = ({game, score, scoreField, handleEditInput, updateState}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = game.id
    console.log(id)

      fetch(`http://localhost:3000/games/${id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              score: scoreField    
          })
      }).then(res => res.json())
      .then(game => ({...game, tasks: JSON.parse(game.tasks)}))
      .then(game => updateState(game))
  }

  return (
    <>
        <Header as="h3">Score Board:</Header>
          <Segment>{score}</Segment>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <TextArea 
                name='scoreField'
                onChange={e => handleEditInput(e)}
                value={scoreField} 
                placeholder='Tell us more' />
              <Button color='teal' floated='right'>Edit Score Board</Button>
            </Form>
    </>

  );
};

export default ScoreBoard