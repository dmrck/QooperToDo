import {StyleSheet} from 'react-native';
import {Colors, SemiBold, Regular} from '../../styles';

const styles = StyleSheet.create({
  todoInputContainer: {
    width: '100%',
    backgroundColor: Colors.gray02,
    borderWidth: 1,
    borderColor: Colors.gray03,
    height: 40,
    marginTop: 60,
    flexDirection: 'row',
    paddingLeft: 16,
    alignItems: 'center',
  },
  todoInput: {
    flex: 1,
    fontFamily: Regular,
  },
  todoAddBtn: {
    width: 56,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoAddCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.gray01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoAddCircleActive: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.gray04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontFamily: SemiBold,
    fontSize: 14,
    color: Colors.white,
  },
});

export default styles;
