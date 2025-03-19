import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#330F0A',
  },
});
