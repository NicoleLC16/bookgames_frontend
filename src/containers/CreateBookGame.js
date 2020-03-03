import React, { Component } from "react";
import { Header, Button, Segment, Form, TextArea, Grid, Input } from 'semantic-ui-react'
// import Comments from '../components/Comments'

class CreateBookGame extends Component {

  state = {
    formFields: {
      title: "",
      rules: "",
      tasks: {
        1:"", 2:"", 3:"", 4:"",5:"", 
        6:"", 7:"", 8:"",9:"", 10:"", 
        11:"", 12:"", 13:"", 14:"", 15:"",
        16:"", 17:"", 18:"", 19:"", 20:"",
        21:"", 22:"", 23:"", 24:"", 25:""
      }
    },
    error: false
  }


  handleBoardSubmit = e => {
    let {formFields: {title, rules, tasks}} = this.state
    Object.keys(tasks).forEach(key => tasks[key] = {description: tasks[key], completed: []})
    e.preventDefault()
    fetch(`http://localhost:3000/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        // id: 
        title: title,
        rules: rules,
        score: "Name: 0 Pts",
        tasks: JSON.stringify(tasks),
        host: this.props.user.id
      })
    }).then(res => res.json())
    // .then(console.log)
    .then(data => fetch(`http://localhost:3000/join_game`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        game_id: data.id
      })
    }))
    .then(res => res.json())
    .then(game => ({...game, tasks: JSON.parse(game.tasks)}))
    .then(game => this.props.updateGames(game))

  }

    // .then(data => {
    //   if (data.error) {
    //     console.log(data.error)
    //     this.setState({error: true});
    //   } else {
    //     console.log(data)
    //     this.props.onLogin(data);
    //     this.props.history.push('/');
    //     this.props.fetchUsers()
    //   }
    // })

  handleChange = e => {
    let {formFields} = this.state
    let form
    if (e.target.name.includes("task")) {
      form = {...formFields, tasks: {...formFields.tasks, [e.target.name.slice(4)]: e.target.value}}
    } else {
      form = {...formFields, [e.target.name]: e.target.value}
      }
    this.setState({formFields: form})
  }


  render() {
    return(
      <>
      <Segment>
        <Form onSubmit={this.handleBoardSubmit}>
          <Header textAlign='center'>Host A New Game</Header>
              
            <Form.Field
              width={8}
              control={Input}
              name="title"
              label='Title'
              placeholder='Provide a title of your game'
              onChange={this.handleChange}
            />
              
            <Form.Field
              rows={12}
              control={TextArea}
              name="rules"
              label='Rules'
              placeholder='Provide a title of your game'
              onChange={this.handleChange}
            />

          <Grid padded>
            <Header as='h3' textAlign='center'>Enter Board Contents</Header>
            
            <Grid.Row columns={5}>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task1"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task2"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task3"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task4"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task5"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task6"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task7"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task8"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task9"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task10"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task11"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task12"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task13"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task14"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task15"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task16"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task17"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task18"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task19"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task20"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5}>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task21"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task22"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task23"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task24"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  control={TextArea}
                  rows={4}
                  name="task25"
                  placeholder='Read a book that starts with A'
                  onChange={this.handleChange}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
        </Segment>
      </>
    )
  }
}

export default CreateBookGame