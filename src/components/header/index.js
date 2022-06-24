import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {clearUserData} from '../../redux/store/user';
import {CommonActions} from '@react-navigation/native';

const Header = ({navigation}) => {
  const userData = useSelector(store => store.user.userData);
  const dispatch = useDispatch();

  const onLogout = () => {
    auth()
      .signOut()
      .then(async () => {
        await AsyncStorage.removeItem('userData');
        dispatch(clearUserData());
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'SingIn',
              },
            ],
          }),
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome , {userData.firstname}</Text>
      <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
        <Text style={styles.logoutText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
