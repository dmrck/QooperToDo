import {StyleSheet} from 'react-native';
import {Colors, SemiBold, Regular} from '../../styles';

const styles = StyleSheet.create({
  todoRemoveBtn: {
    width: 56,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoRemoveCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.gray04,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeText: {
    fontFamily: SemiBold,
    fontSize: 14,
    color: Colors.white,
  },
});

export default styles;
