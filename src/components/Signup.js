import React, { Component } from 'react'
import {api} from '../services/api'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Signup extends Component {

  state = {
    formFields: {
      name: "",
      username: "",
      password: ""
    },
    error: false
  }

  handleSignupSubmit = e => {
    e.preventDefault()
    api.auth.signup({user: this.state.formFields})
    .then(data => {
      if (data.error) {
        console.log(data.error)
        this.setState({error: true});
      } else {
        console.log(data)
        this.props.onLogin(data);
        this.props.history.push('/');
        this.props.fetchUsers()
      }
    })
  }

  handleChange = e => {
    let form = {...this.state.formFields, [e.target.name]: e.target.value}
    this.setState({formFields: form})
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' style={{color: 'black'}} textAlign='center'>
            <Image src='/bookIcon.png' /> Create A New Account!
          </Header>
          <Form size='large' onSubmit={this.handleSignupSubmit}>
            <Segment stacked>
              <Form.Input 
              fluid icon='smile outline' 
              iconPosition='left' 
              placeholder='Name'
              name='name'
              onChange={this.handleChange}
              value={this.state.formFields.name} 
              />
              <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='username'
              name='username'
              onChange={this.handleChange}
              value={this.state.formFields.username} 
              />
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

              <Button style={{backgroundColor: '#760E16', color: 'white'}} fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href='/login'>Sign In!</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Signup