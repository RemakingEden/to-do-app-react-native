import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

type Task = {
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (): void => {
    if (task.trim().length > 0) {
      setTaskList([...taskList, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index: number): void => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed;
    setTaskList(newTaskList);
  };

  return (
    <View style={styles.container} testID="add-task-view">
      <TextInput
        placeholder="Enter a task"
        testID="task-text-input"
        value={task}
        onChangeText={setTask}
        style={styles.textInput}
      />
      <Button title="Add Task" onPress={addTask} testID="add-task-button" />
      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <CheckBox
              value={item.completed}
              onValueChange={() => toggleTaskCompletion(index)}
            />
            <Text
              style={[
                styles.taskText,
                item.completed ? styles.completedTask : {}
              ]}
              testID="task-item"
            >
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  taskText: {
    padding: 10,
    backgroundColor: '#ccc',
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
});

export default App;

