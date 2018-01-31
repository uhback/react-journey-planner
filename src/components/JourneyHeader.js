import React, { Component }from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Header, Icon, Menu, Segment } from 'semantic-ui-react'

class JourneyHeader extends React.Component {
    state = { activeItem: 'Dashboard' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
            <Header as='h1' icon textAlign='center' color='black'>
              <Icon name='plane' color='red' />
              <Header.Content>
                Journey Planner
              </Header.Content>
              <Header.Subheader>
                Make your private journey and share your expedition to others!
              </Header.Subheader>
            </Header>
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

export default JourneyHeader;

// (<header>
//   <h1>Journey Planner!</h1>
//   <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
//   <NavLink to="/shareboard" activeClassName="is-active">Share Journey</NavLink>
//   <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
//   </header>)


