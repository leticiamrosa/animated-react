import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1),
    }
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500,
      }).start(() => {
        Animated.timing(this.state.animation, {
          toValue: 1,
          duration: 1500,
        }).start();
      })
    });
  }

  render() {

    // Style dinamico
    const animatedStyles = {
      // opacity: this.state.animation
      transform: [
        {
          // translateY: this.state.animation,
          scale: this.state.animation,
          // scaleX: this.state.animation,
        }
      ]
    }
    
    return (
      <View style={styles.container}>
      <Text>Teste</Text>
        <TouchableWithoutFeedback onPress={this.startAnimation}>

        <Animated.View style={[styles.box, animatedStyles]} >
        <Text>Vai ficar tudo bem</Text>
        </Animated.View>

        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
  }
});
