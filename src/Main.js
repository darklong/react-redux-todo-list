import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
// import { Audio } from 'expo';
import * as Actions from './actions';
import AddTodo from './containers/AddTodo';
import TodoList from './components/TodoList'

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
        <TodoList/>
      </View>
    )
  }
}


const secondColor = 'rgb(219,196,155)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  header: {
    flex: 1
  },
  body: {
    flex: 2
  },
  footer: {
    flex: 1
  },
  
});

export default Main;