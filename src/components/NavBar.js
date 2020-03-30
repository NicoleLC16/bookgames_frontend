import React, { Component } from "react";
import { Menu, Segment, Image } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


class NavBar extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handlelogout = () => {
    this.setState({ activeItem: 'logout' })
    this.props.onLogOut()
    alert("You have been logged out")
    this.props.history.push('/')
  }

  render() {
    const { activeItem } = this.state

    return(
    <>
 
    <Segment className="logoBanner" size='large'>
      <Image src="/bookgameslogotransparent.png" size='large'centered />
    </Segment>
    <div className="menu-border">
      <div className="menu-wrapper">
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            as={NavLink}
            exact to='/'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='games'
            as={NavLink}
            exact to='/games'
            active={activeItem === 'games'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='about'
            as={NavLink}
            exact to='/about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          {localStorage.token ? 
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handlelogout}
            />
            : null }
            {localStorage.token ? null : 
            <Menu.Item
              as={NavLink}
              exact to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
          /> }
        </Menu>
      </div>
    </div>
  </>
    )
  }
}

export default NavBar