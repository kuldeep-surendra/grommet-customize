import React, { Component } from 'react';

import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import UserIcon from 'grommet/components/icons/base/User';


class SessionMenu extends Component {
  constructor() {
    super();
    this._onLogout = this._onLogout.bind(this);
  }

  _onLogout(event) {
    console.log(this.props);
    this.props.history.push('/login');
  }

  render() {
    return (
      <Menu
        icon={<UserIcon />}
        a11yTitle='Session'
      >
        <Box pad='medium'>
          <Heading tag='h3' margin='none'>Qwinix</Heading>
        </Box>
        <Anchor href='#' onClick={this._onLogout} label='Logout' />
      </Menu>
    );
  }
}


export default SessionMenu;
