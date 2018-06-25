// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import Logo from 'grommet/components/icons/Grommet';


class NavControl extends Component {
  render() {

    let result;
    result = (
      <Button>
        <Box
          direction='row'
          responsive={false}
          pad={{ between: 'small' }}
        >
          <Logo />
          <Title>Sample App</Title>
        </Box>
      </Button>
    );
    return result;
  }
}

export default NavControl;
