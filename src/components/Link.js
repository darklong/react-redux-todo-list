import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../constants/Color'

const Link = ({ active, children, onPress }) => (
  
    <TouchableOpacity onPress={onPress}>
        <View style={styles.fillter}>
            <Text style={ active ? styles.itemActive : styles.item } >{children}</Text>
        </View>
    </TouchableOpacity>   
);
const styles = StyleSheet.create({
    item: {
        color: Color.textColor,
    },
    itemActive: {
        color: Color.thirdColor
    },
    fillter: {
        margin: 4
    }
});
export default Link;
