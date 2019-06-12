import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const Todo = ({ onPress, completed, text }) => (
    <View>
    <TouchableOpacity onPress={onPress}>
        <View>
            <Text style={ completed ? styles.itemDid : styles.item } >{text}</Text>
        </View>
    </TouchableOpacity>       
    </View>
);

const styles = StyleSheet.create({
    item: {
        color:'rgb(219,196,155)',
    },
    itemDid: {
        textDecorationLine: 'line-through',
        color:'rgb(219,196,155)'
    }
});

export default Todo;