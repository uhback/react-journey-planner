import React, { Component }from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Header, Icon, Menu, Segment } from 'semantic-ui-react'
import { startLogout } from '../actions/auth';

class JourneyHeader extends React.Component {
    state = { activeItem: '' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name }, () => console.log(this.state.value))
    
    onClickLogout = () => {
      this.props.startLogout();
    }

    render() {
      const { activeItem } = this.state
      return (
        <div className="container">
          <Header as='h1' icon textAlign='center' color='black'>
            <Icon name='plane' color='red' />
            <Header.Content>
              Journey Planner
            </Header.Content>
            <Header.Subheader>
              Make your private journey and share your expedition to others!
            </Header.Subheader>
          </Header>
          <div>
            <Menu pointing secondary>
              <Menu.Item name='Dashboard' as={NavLink} exact to={'/dashboard'} active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />
              <Menu.Item name='ShareJourney' as={NavLink} exact to={'/shareboard'} active={activeItem === 'ShareJourney'} onClick={this.handleItemClick} />
              <Menu.Item name='Contact' as={NavLink} exact to={'/contact'} active={activeItem === 'Contact'} onClick={this.handleItemClick} />
              <Menu.Menu position='right'>
                <Menu.Item name='Logout' onClick={this.onClickLogout} />
              </Menu.Menu>
            </Menu>
          </div>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(JourneyHeader);

// (<header>
//   <h1>Journey Planner!</h1>
//   <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
//   <NavLink to="/shareboard" activeClassName="is-active">Share Journey</NavLink>
//   <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
//   </header>)


