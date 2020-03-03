import React from "react"
import { Grid } from 'semantic-ui-react'


const Tasks = props => {
  // console.log(props.task.completed)
  const boardSelect = () => {
    // push the id of a user into comments
    // let player = props.user.id
    // props.task.completed.push(player)
    
    let playerId = props.selectedPlayer

    console.log(playerId)
    props.task.completed.push(playerId)
    console.log(playerId)
    console.log(props.game.tasks)  
    fetch(`http://localhost:3000/games/${props.game.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify({
        // this is only pushing one instance of task
        // need to push all of tasks
          tasks: JSON.stringify(props.game.tasks)
      })
  }).then(res => res.json())
  // .then(game => ({...game, tasks: JSON.parse(game.tasks)}))
  .then(props.updateState(props.game))
  // .then(game => ({...game, tasks: JSON.parse(game.tasks)}))
  // .then(game => updateState(game)) 

    // let completedtasks = props.task.completed.push(playerId)
    // console.log(completedtasks)
    // console.log(props.game)
    // return console.log(props.task)
  }

  const isCompleted = () => {
    // console.log(props.game)
    // display tasks.completed 
    // that is === player id
    // return the tasks that have the selected player id in the compeleted array of task

    // let playerTasks = []

    return props.task.completed.includes(props.selectedPlayer)
    
    // Object.keys(props.game.tasks).forEach(taskId => {
    //   if (props.game.tasks[taskId].completed.includes(player)) {
    //     playerTasks.push(parseInt(taskId))
    //   }
    //   })
    // return console.log(playerTasks)
  }
  console.log(isCompleted())
  return (
    <>
        <Grid.Column className={isCompleted() ? 'board-content-completed' : 'board-content'} onClick={props.selectedPlayer === null || (props.user === null || props.user.id !== props.game.host) ? null : () => boardSelect()}>{props.task.description}</Grid.Column>
    </>

  );
};

export default Tasks

// .row > div {
//   background-color: pink;
//   height: 200px;
// }