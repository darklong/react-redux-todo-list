import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Color from '../constants/Color'

const Todo = ({ onPress, completed, text }) => (
    <TouchableOpacity onPress={onPress}>
        <View>
            <Text style={ completed ? styles.itemDid : styles.item } >{text}</Text>
        </View>
    </TouchableOpacity>       
);

const styles = StyleSheet.create({
    item: {
        color: Color.textColor,
    },
    itemDid: {
        textDecorationLine: 'line-through',
        color: Color.textColor
    }
});

export default Todo;