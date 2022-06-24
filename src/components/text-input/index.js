import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Colors, Regular} from '../../styles';
import styles from './styles';

const FunctionalTextInput = React.forwardRef(
  ({placeholder, errorMessage, value, onChangeText, testID}, ref) => {
    const [error, setError] = React.useState(false);

    React.useImperativeHandle(ref, () => ({
      isValid() {
        return isValid();
      },
    }));

    const isValid = () => {
      if (value.trim() != '') {
        setError(false);
        return true;
      } else {
        setError(true);
        return false;
      }
    };

    return (
      <View style={styles.container}>
        <TextInput
          testID={testID}
          value={value}
          onChangeText={onChangeText}
          style={[styles.inputContainer, error ? styles.redBorder : {}]}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray04}
        />
        {error && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      </View>
    );
  },
);

export default FunctionalTextInput;
