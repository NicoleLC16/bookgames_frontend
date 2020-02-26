import React from "react"
import { Grid } from 'semantic-ui-react'


const Tasks = props => {

  return (
    <>
        <Grid.Column>{props.task}</Grid.Column>
    </>

  );
};

export default Tasks