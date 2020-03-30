import React from "react"
import { Header, Segment, Button, Form, TextArea } from 'semantic-ui-react'


const ScoreBoard = ({user, game, score, scoreField, handleEditInput, updateStateScore, showScore, showEditScore}) => {

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
      .then(game => updateStateScore(game))
  }

  return (
    <>
      <div>
        <Header as="h3">Score Board:</Header>
          <Segment style={{whiteSpace: 'pre-wrap', marginBottom: '10px', fontSize: '16px'}} >{score}</Segment>
      </div>
      {showScore ?
        <div>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <TextArea 
                name='scoreField'
                onChange={e => handleEditInput(e)}
                value={scoreField} 
                placeholder='Tell us more' />
              <Button style={{backgroundColor: '#2C4961', color: 'white', margin: '5px'}} floated='right'>Submit</Button>
            </Form>
        </div>
      : null }
      <div>
      {user === null || user.id !== game.host ? null :
          <Button style={{backgroundColor: '#9a101b', color: 'white'}} floated='right' onClick={() => showEditScore()}>Edit Score Board</Button>
      }
      </div>
    </>

  );
};

export default ScoreBoard