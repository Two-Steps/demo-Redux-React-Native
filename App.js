import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './src/navigation/AppNavigator'
import { Provider as StoreProvider } from 'react-redux'
import store from './src/store'


export default function App() {
  return (
    <StoreProvider store={store}>
      <MainStackNavigator />
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
