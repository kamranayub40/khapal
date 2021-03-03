/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Provider from './src/components/index';
// import DrawerNavigator from './src/Screen/cofig/Navigation'
// import {AppRegistry} from 'react-native';


function App() {
  return (
    <Provider/>
     
     
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    // flex:1
  }
 
});

export default App;
// AppRegistry.registerComponent('App', () => App);

