import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText(''); 
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  addbutton: {
    marginTop: 999999,
  },
});

export default ToDoForm;