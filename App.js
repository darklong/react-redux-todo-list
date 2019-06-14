import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import store from './src/store';
import SafeAreaView from 'react-native-safe-area-view';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} UNSAFE_readLatestStoreStateOnFirstRender={true} >
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
          <Main/>
        </SafeAreaView>
      </Provider>
    );
  }
}
const unsubscribe = store.subscribe(() => console.log(store.getState()))
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32,37,55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
