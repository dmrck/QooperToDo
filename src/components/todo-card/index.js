import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors, Regular} from '../../styles';
import styles from './styles';
import {TextInput} from 'react-native-gesture-handler';

const TodoCard = ({item, onSubmitEditing, onRemoveTask}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [taskName, setTaskName] = useState(item._data.task);

  const _onSubmitEditing = () => {
    if (taskName.trim() != '') {
      onSubmitEditing(item, taskName);
      setIsEditMode(false);
    } else {
      setTaskName(item._data.task);
      setIsEditMode(false);
    }
  };

  return (
    <View
      style={{
        width: '100%',
        height: 64,
        backgroundColor: Colors.gray03,
        marginTop: 3,
        flexDirection: 'row',
        paddingVertical: 12,
        paddingLeft: 16,
        alignItems: 'center',
      }}>
      {isEditMode ? (
        <TextInput
          value={taskName}
          onChangeText={setTaskName}
          onSubmitEditing={_onSubmitEditing}
          style={{
            flex: 1,
            backgroundColor: Colors.gray02,
            height: '100%',
            paddingLeft: 16,
            fontFamily: Regular,
            color: Colors.gray04,
          }}
        />
      ) : (
        <Text onPress={() => setIsEditMode(true)} style={{flex: 1}}>
          {taskName}
        </Text>
      )}
      <TouchableOpacity
        onPress={() => onRemoveTask(item)}
        style={styles.todoRemoveBtn}>
        <View style={styles.todoRemoveCircle}>
          <Text style={styles.removeText}>X</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;
