import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import SessionMenu from './SessionMenu';

class NavSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navClose: false
    };
  }

  render() {
    return (
      <Sidebar colorIndex='neutral-3' fixed={true}>
        <Header size='large' justify='between' pad={{ horizontal: 'medium' }}>
          <Title onClick={this._onClose} a11yTitle='Close Menu'>
            <Logo />
            <span>Sample App</span>
          </Title>
          <Button
            icon={<CloseIcon />}
            onClick={() => this.setState({ navClose: false })}
            plain={true}
            a11yTitle='Close Menu'
          />
        </Header>
        <Menu fill={true} primary={true}>
          <Anchor key='Dashboard' path='/dashboard' label='Dashboard' />
          <Anchor key='Tasks' path='/tasks' label='Tasks' />
        </Menu>
        <Footer pad={{ horizontal: 'medium', vertical: 'small' }}>
          <SessionMenu {...this.props} />
        </Footer>
      </Sidebar>
    );
  }
}


export default NavSidebar;
