import React, { Component } from 'react';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import NavControl from '../components/NavControl';


class Dashboard extends Component {

  render() {
    return (
      <Article primary={true}>
        <Header
          direction='row'
          justify='between'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <NavControl />
        </Header>
        <Box pad='medium'>
          <Heading tag='h3' strong={true}>
            Running Tasks
          </Heading>
          <Paragraph size='large'>
            The backend here is using request polling (5 second interval).
            See <Anchor path='/tasks'
              // label={getMessage(intl, 'Tasks')} 
            /> page for an example
            of websocket communication.
          </Paragraph>
        </Box>
      </Article>
    );
  }
}

export default Dashboard;
