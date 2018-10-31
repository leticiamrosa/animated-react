import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

import styles from '../styles/styles';

export default class Home extends Component {
  constructor(props) {
      super(props);
    this.state = {

    };
  }

  render() {
      const { container } = styles;
      const { navigation } = this.props;
    return (
      <View style={container}>
        <Button textBtn="Entrar"
            onPress={() => {
                navigation.navigate('Sliders');
            }}
        />
      </View>
    );
  }
}


// () => {
//     this.handlePress();
//     // this.props.navigation.navigate('Slider');