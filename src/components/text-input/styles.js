import {StyleSheet} from 'react-native';
import {Colors, SemiBold, Regular} from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.gray03,
    minHeight: 40,
    backgroundColor: Colors.gray02,
    paddingHorizontal: 16,
    fontFamily: Regular,
    fontSize: 14,
    lineHeight: 16,
  },
  redBorder: {
    borderColor: Colors.red,
  },
  errorMessage: {
    fontFamily: Regular,
    color: Colors.red,
    fontSize: 10,
    marginLeft: 16,
  },
});

export default styles;
