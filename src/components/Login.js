import React, { Component } from 'react'
import {api} from '../services/api'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
  state = {
    formFields: {
      username: "",
      password: ""
    },
    error: false
  }

  handleChange = e => {
    let form = {...this.state.formFields, [e.target.name]: e.target.value}
    this.setState({formFields: form})
  }

  handleSubmit = e => {
    e.preventDefault()
    api.auth.login(this.state.formFields)
      .then(data => {
        if (data.error) {
          console.log(data.error)
          this.setState({error: true});
        } else {
          this.props.onLogin(data);
          this.props.history.push('/games');
        }
    })
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/bookIcon.png' /> Log-in to your account
          </Header>
          <div>{this.state.error ? <h1>Try again...</h1> : null}</div>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='username'
              name='username'
              onChange={this.handleChange}
              value={this.state.formFields.username} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
                onChange={this.handleChange}
                value={this.state.formFields.password} 
              />

              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='/signup'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Login