import React, { Component } from 'react';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/Grommet';

class Login extends Component {
  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit() {
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <Split flex='left' separator={true}>

        <Article>
          <Section
            full={true}
            colorIndex='brand'
            texture='url(img/splash.png)'
            pad='large'
            justify='center'
            align='center'
          >
            <Heading tag='h1' strong={true}>Sample App</Heading>
            <Paragraph align='center' size='large'>
              Development with Grommet is cool.
            </Paragraph>
          </Section>
        </Article>

        <Sidebar justify='between' align='center' pad='none' size='large'>
          <span />
          <LoginForm
            align='start'
            logo={<Logo className='logo' colorIndex='brand' />}
            title='Sample App'
            onSubmit={this._onSubmit}
            usernameType='text'
          />
          <Footer
            direction='row'
            size='small'
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <span className='secondary'>&copy; 2017 Grommet Labs</span>
          </Footer>
        </Sidebar>

      </Split>
    );
  }
}

export default Login;
