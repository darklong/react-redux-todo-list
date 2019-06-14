import React,{ Component } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';

class TodoList extends Component {
    _renderItem = ({item}) => (
        <Todo
            onPress = { () => null }
            completed={item.completed}
            text={item.text}
        />
    )
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.item}>this is your list todo {this.props.todos.length}</Text>
            <FlatList
                data = {this.props.todos}
                renderItem = {this._renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            </View>
        )
    }
}

mapStateToProps = state => ({
    todos: state.todos
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        color:'rgb(219,196,155)',
    }
});

export default connect(mapStateToProps, null)(TodoList);
