import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
