import React, { Component } from "react";
import { Menu, Segment, Image } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (name) => {
    return this.setState({ activeItem: name })
  }

  handlelogout = (name) => {
    this.setState({ activeItem: name })
    this.props.onLogOut()
    this.props.history.push('/login')
  }

  render() {
    const { activeItem } = this.state

    return(
    <>
    <Segment.Group>
    <Segment >
      <Image src="/bookgameslogobanner.png" size='large'centered />
    </Segment>
    <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={NavLink}
            to='/games'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to='/games'
            name='games'
            active={activeItem === 'games'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handlelogout}
            />
            <Menu.Item
              as={NavLink}
              to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
  </Segment>
  </Segment.Group> 
  </>
    )
  }
}

export default NavBar