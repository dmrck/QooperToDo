import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import Header from '../../components/header';
import {Colors, Regular, SemiBold} from '../../styles';
import TodoInput from '../../components/todo-input';
import TodoCard from '../../components/todo-card';
import {addNewTask, getTasks} from '../../services/todos';
import {useSelector, useDispatch} from 'react-redux';

const Home = ({navigation}) => {
  const userData = useSelector(store => store.user.userData);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasksAsync();
  }, []);

  const getTasksAsync = async () => {
    const tasks = await getTasks(userData.uid);
    if (tasks.length > 0) {
      const taskArray = [];
      tasks.forEach(task => {
        taskArray.push(task);
      });
      setTasks([...taskArray]);
    }
    else {
      setTasks([])
    }
  };

  const onAddTask = async () => {
    if (newTask.trim() == '') return;

    await addNewTask(userData.uid, newTask);
    getTasksAsync();
    setNewTask('');
  };

  const onEditTask = (doc, newVal) => {
    doc.ref.update({task: newVal}).then(() => getTasksAsync());
  };

  const onDeleteTask = doc => {
    doc.ref.delete().then(() => getTasksAsync());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header navigation={navigation} />

      <View style={styles.container}>
        <TodoInput
          value={newTask}
          onChangeText={setNewTask}
          pressAddTask={onAddTask}
        />
        <Text style={styles.taskTitle}>Tasks</Text>
        {tasks.length == 0 ? (
          <Text style={styles.noTaskText}>{':( \nThere is no task yet!'}</Text>
        ) : (
          <FlatList
            style={{flex: 1}}
            data={tasks}
            renderItem={({item}) => (
              <TodoCard
                item={item}
                onSubmitEditing={onEditTask}
                onRemoveTask={onDeleteTask}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
