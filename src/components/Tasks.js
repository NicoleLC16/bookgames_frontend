import React from "react"
import { Grid } from 'semantic-ui-react'


const Tasks = props => {
  // console.log(props.task.completed)
  const boardSelect = (task) => {
    // push the id of a user into comments
    // let player = props.user.id
    // props.task.completed.push(player)
    return console.log(task)
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
        <Grid.Column className={isCompleted() ? 'board-content-completed' : 'board-content'} onClick={() => boardSelect(props.task)}>{props.task.description}</Grid.Column>
    </>

  );
};

export default Tasks

// .row > div {
//   background-color: pink;
//   height: 200px;
// }