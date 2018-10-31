import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// Screen
import Home from './src/screen/Home';
import Sliders from './src/screen/Slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <RootStack/>
    );
  }
}

const RootStack = createStackNavigator({
  Sliders,
  Home,
});