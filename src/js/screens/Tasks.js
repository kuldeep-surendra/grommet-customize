import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import NavControl from '../components/NavControl';

class Tasks extends Component {
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
        <Box pad={{ horizontal: 'medium' }}>
          <Paragraph size='large'>
            The backend here is using websocket.
          </Paragraph>
        </Box>
      </Article>
    );
  }
}

export default Tasks;
