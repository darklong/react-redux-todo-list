import React from 'react'
import FilterLInk from '../containers/FilterLink'
import { Visibility_Filters } from '../actions/types'
import { View, Text } from 'react-native';

const Footer = () => (
    <View style={{flex: 1, flexDirection:'row'}}>
        <Text>Show: </Text>
        <FilterLInk filter={Visibility_Filters.SHOW_ALL} children="All" />
        <FilterLInk filter={Visibility_Filters.SHOW_ACTIVE} children="Active" />
        <FilterLInk filter={Visibility_Filters.SHOW_COMPLETED} children="Completed" />
    </View>
)

export default Footer;