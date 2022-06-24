import {StyleSheet} from 'react-native';
import {Colors, SemiBold, Regular} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 77,
    width: '100%',
    backgroundColor: Colors.gray02,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: Regular,
    fontSize: 14,
    color: Colors.black,
    flex: 1,
  },
  logoutBtn: {
    height: 45,
    width: 89,
    backgroundColor: Colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontFamily: SemiBold,
    color: Colors.gray02,
    fontSize: 14,
  },
});

export default styles;
