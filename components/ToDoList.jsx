import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyList}></Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  task: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  taskText: {
    fontSize: 16,
  },
  emptyList: {
    textAlign: 'center',
    padding: 20,
    color: 'gray',
  },
});

export default ToDoList;