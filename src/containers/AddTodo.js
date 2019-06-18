import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Color from '../constants/Color'
import Footer from '../components/Footer';

class AddTodo extends Component {
    constructor (props) {
      super(props);
      this.state = { value: null }
    }
    _onChangeText = (Text) => {
      this.setState({value: Text})
    }
    _addTodo = () => {
      this.props.addTodo(this.state.value);
    }
    render () {
        return (
            <View style={styles.header}>
                <TextInput 
                    style={styles.inputTodo}
                    placeholder="Type here to add"
                    placeholderTextColor={Color.textColor}
                    onChangeText={this._onChangeText}
                />
                <Button
                    title ="ADD"
                    style={styles.addBtn}
                    onPress={this._addTodo}
                    color={Color.secondColor}
                />
                <Footer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  header: {
    height: 120,
  },
  inputTodo: {
    height: 40,
    color: Color.textColor
  },
  addBtn: {
    backgroundColor: Color.secondColor
  }
});

export default connect(null,actions)(AddTodo);
