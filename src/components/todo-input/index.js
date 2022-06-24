import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../styles';
import styles from './styles';

const TodoInput = ({value, onChangeText, pressAddTask}) => {
  return (
    <View style={styles.todoInputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.todoInput}
        placeholderTextColor={Colors.gray04}
        placeholder="Type a task"
        onSubmitEditing={pressAddTask}
      />
      <TouchableOpacity
        onPress={pressAddTask}
        disabled={value == ''}
        style={styles.todoAddBtn}>
        <View
          style={
            value != '' ? styles.todoAddCircleActive : styles.todoAddCircle
          }>
          <Text style={styles.plusText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;
