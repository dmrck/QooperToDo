import {StyleSheet} from 'react-native';
import {Colors, SemiBold} from '../../styles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '12%',
    backgroundColor: Colors.white,
  },
  headerText: {
    fontFamily: SemiBold,
    fontSize: 18,
    marginBottom: 10,
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
});

export default styles;
