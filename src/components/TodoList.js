import React,{ Component } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';


const renderItem = ({item, index}) => (
    <Todo
        onPress = { () => toggleTodo(index) }
        completed={item.completed}
        text={item.text}
    />
)
const TodoList = ({ todos, toggleTodo}) => (
    <FlatList
        data = {todos}
        renderItem = {({item, index}) => (
            <Todo
                onPress = { () => toggleTodo(index) }
                completed={item.completed}
                text={item.text}
        />)}
        keyExtractor={(item) => item.id.toString()}
    />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        color:'rgb(219,196,155)',
    }
});

export default TodoList;
