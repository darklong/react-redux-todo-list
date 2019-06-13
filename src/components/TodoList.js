import React,{ Component } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import Todo from './Todo';
import { connect } from 'react-redux';
import store from '../store';

class TodoList extends Component {
    constructor (props) {
        super(props);
        const unsubscribe = store.subscribe(() => {
            let state = store.getState();
            this.props.todos =  state.todos;
        })
    }
    _renderItem = ({item}) => (
        <Todo
            onPress = { () => null }
            completed={item.completed}
            text={item.text}
        />
    )
    _viewProps = () => {
        // this.props.todos = dataTemp
        console.log(this.props.todos);
    }
    render() {
        return (
            <View style={styles.container}>
            <Button
                    title ="View props"
                    onPress={this._viewProps}
            />
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
//data = {this.props.todos}
const dataTemp = [
    {
        "completed": false,
        "id": 0,
        "text": "Uhhuuu",
    },
    {
        "completed": false,
        "id": 0,
        "text": "Uhhuuu",
    },
];
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
