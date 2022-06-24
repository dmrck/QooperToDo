import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, SemiBold} from '../../styles';
import styles from './styles';
import FunctionalTextInput from '../../components/text-input';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserData} from '../../redux/store/user';
import {useDispatch} from 'react-redux';
import { CommonActions } from '@react-navigation/native';

const SingIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const dispatch = useDispatch();

  const usernameRef = useRef();
  const firstnameRef = useRef();

  const onLogin = () => {
    const usernameIsValid = usernameRef.current.isValid();
    const firstnameIsValid = firstnameRef.current.isValid();

    if (usernameIsValid && firstnameIsValid) {
      auth()
        .signInAnonymously()
        .then(async user => {
          const userData = {
            uid: user.user.uid,
            username: username,
            firstname: firstname,
            lastname: lastname,
          };
          await AsyncStorage.setItem('userData', JSON.stringify(userData));
          dispatch(setUserData(userData));
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Home',
                },
              ],
            }),
          );
        })
        .catch(error => {
          Alert.alert('Error', error.message);
        });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Login to your account</Text>
        <FunctionalTextInput
          ref={usernameRef}
          placeholder={'Username'}
          value={username}
          onChangeText={setUsername}
          errorMessage={'User name is required'}
        />
        <FunctionalTextInput
          ref={firstnameRef}
          placeholder={'First Name'}
          value={firstname}
          onChangeText={setFirstname}
          errorMessage={'First name is required'}
        />
        <FunctionalTextInput
          placeholder={'Last Name'}
          value={lastname}
          onChangeText={setLastname}
        />

        <TouchableOpacity onPress={onLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SingIn;
