import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Todo from './Todo';


const renderItem = ({item, index},toggleTodo) => (
    <Todo
        onPress = { () => toggleTodo(index) }
        completed={item.completed}
        text={item.text}
    />
)
const TodoList = ({ todos, toggleTodo}) => (
    <FlatList
        style={styles.container}
        data = {todos}
        renderItem = { ({item, index}) => renderItem({item, index}, toggleTodo)}
        keyExtractor={(item) => item.id.toString()}
    />
);


const styles = StyleSheet.create({
    container: {
    },
    item: {
        color:'rgb(219,196,155)',
    }
});

export default TodoList;
