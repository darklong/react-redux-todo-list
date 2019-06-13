import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddTodo extends Component {
    constructor (props) {
      super(props);
      this.state = { value: null }
    }
    _onChangeText = (Text) => {
      this.setState({value: Text})
    }
    _addTodo = () => {
        // this.props.addTodo('jksjdflakj');
        this.props.addTodo(this.state.value);
        // console.log(store.getState());
    }
    render () {
        return (
            <View style={styles.header}>
                <TextInput 
                    style={styles.inputTodo}
                    placeholder="Type here to add"
                    placeholderTextColor="rgb(219,196,155)"
                    onChangeText={this._onChangeText}
                />
                <Button
                    title ="ADD"
                    style={styles.addBtn}
                    onPress={this._addTodo}
                />
            </View>
        )
    }
}

const secondColor = 'rgb(219,196,155)';
const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  inputTodo: {
    height: 40,
    color: secondColor
  },
  addBtn: {
    backgroundColor: secondColor
  }
});

export default connect(null,actions)(AddTodo);

// export default AddTodo;