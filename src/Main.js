import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
// import { Audio } from 'expo';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class Main extends Component {
  // async _addEffectAudio (){
  //   const soundObject = new Audio.Sound();
  //   try {
  //     await soundObject.loadAsync(require('../assets/audio/pip.mp3'));
  //     await soundObject.playAsync();
  //     // Your sound is playing!
  //   } catch (error) {
  //     // An error occurred!
  //   }
  // } 
  render() {
    return (
      <View style={styles.container}>
        <AddTodo/>
        <VisibleTodoList/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 6
  },
});

export default Main;