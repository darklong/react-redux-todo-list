import React from 'react';
import { StyleSheet } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import store from './src/store';
import SafeAreaView from 'react-native-safe-area-view';
import Color from './src/constants/Color';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
          <Main/>
        </SafeAreaView>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.coreColor,
  },
});

const unsubscribe = store.subscribe(() => console.log(store.getState()))