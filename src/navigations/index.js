import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserData} from '../redux/store/user';
import {useDispatch} from 'react-redux';

import SingInScreen from '../screens/sing-in';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [initialScreen, setInitialScreen] = useState('');
  const dispatch = useDispatch();

  const onAuthStateChanged = async user => {
    if (user) {
      const userData = await AsyncStorage.getItem('userData');
      dispatch(setUserData(JSON.parse(userData)));
      setInitialScreen('Home');
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
