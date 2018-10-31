import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import Slider from "react-native-slider";

import styles from '../styles/styles';

const img = require('../img/right.png');
export default class Sliders extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { container, contentSlider, footer, top, thumb, customThumb, main, textContent } = styles;
    const renderThumb = (
      <Icon
      raised
      name='microphone'
      type='font-awesome'
      color='#f50'
      onPress={() => console.log('hello')} />
    );

    const renderImg = (
      <Image source={img} resizeMode="contain"/>
    )

    return (
      <View style={container}>
        <View style={top}>
        <Text> Slider </Text>
        </View>
        <View style={main}>
            {renderThumb}
        </View>
        <View style={footer}>
        {/* <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})} 
            onSlidingComplete={value => console.log('terminei')}
            thumbStyle={thumb}
            thumbTintColor={'#fff'}
            style={bodySlider}
            trackStyle={trackStyle}
            minimumTrackTintColor='#B00F1D'
            maximumTrackTintColor='transparent'
          /> */}
          <View style={contentSlider}>
          {/* <Slider
            value={this.state.value}
            onValueChange={(value) => this.setState({value})} 
            onSlidingComplete={() => console.log('terminei')}
            thumbStyle={thumb}
            thumbTintColor={'#fff'}
            style={bodySlider}
            trackStyle={trackStyle}
            // minimumTrackTintColor='#B00F1D'
            // maximumTrackTintColor='transparent'
            thumbImage={renderImg}
          /> */}
          <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          maximumTrackTintColor="transparent"
          thumbImage={img}
        />
          </View>
          <View style={textContent}>
          {/* <Text>Value: {this.state.value}</Text> */}
          {renderThumb}
          </View>
        </View>
      </View>
    );
  }
}
