import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './src/components/Button';

import styles from './src/styles/styles';

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
      <Text>Teste button</Text>
        <Button textBtn="Entrar"/>
      </View>
    );
  }
}
