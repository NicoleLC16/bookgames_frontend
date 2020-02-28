import React from "react"
import { Grid } from 'semantic-ui-react'


const Tasks = props => {

  const boardSelect = (task) => {
    // push the id of a user into comments
    // let player = props.user.id
    // props.task.completed.push(player)
    return console.log(task)
  }
  return (
    <>
        <Grid.Column className='board-content' onClick={() => boardSelect(props.task)}>{props.task.description}</Grid.Column>
    </>

  );
};

export default Tasks

// .row > div {
//   background-color: pink;
//   height: 200px;
// }