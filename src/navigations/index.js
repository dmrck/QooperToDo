import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import SingInScreen from '../screens/sing-in';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [initialScreen, setInitialScreen] = useState('');

  const onAuthStateChanged = user => {
    if (user) {
      //getUserData and navigate Home
    } else {
      setInitialScreen('SingIn');
    }
  };

  useEffect(() => {
    const userControl = auth().onAuthStateChanged(onAuthStateChanged);

    return userControl;
  }, []);

  if (initialScreen == '') {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialScreen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SingIn" component={SingInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
