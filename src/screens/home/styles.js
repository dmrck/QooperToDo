import {StyleSheet} from 'react-native';
import {Colors, SemiBold, Regular} from '../../styles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  loginBtn: {
    width: '100%',
    height: 45,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontFamily: SemiBold,
    color: Colors.gray02,
    fontSize: 14,
    lineHeight: 20,
  },
  taskTitle: {
    alignSelf: 'center',
    fontFamily: SemiBold,
    color: Colors.black,
    fontSize: 18,
    marginTop: 32,
  },
  noTaskText: {
    fontFamily: Regular,
    textAlign: 'center',
    marginTop: 32,
    color: Colors.purple,
  },
});

export default styles;
