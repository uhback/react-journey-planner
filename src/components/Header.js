import React, { Component }from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

class Header extends React.Component {
    state = { activeItem: 'Dashboard' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item name='Dashboard' as={Link} to={'/'} active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
            <Menu.Item name='Share Journey' as={Link} to={'/shareboard'} active={activeItem === 'Share Journey'} onClick={this.handleItemClick} />
            <Menu.Item name='Contact' as={Link} to={'/contact'} active={activeItem === 'Contact'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
}

export default Header;