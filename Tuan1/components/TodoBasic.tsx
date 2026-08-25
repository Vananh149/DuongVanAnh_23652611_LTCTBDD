import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Todo {
  id: string;
  title: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Học React Native',
    },
    {
      id: '2',
      title: 'Học TypeScript',
    },
    {
      id: '3',
      title: 'Làm bài tập',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      {todos.map((todo) => (
        <View key={todo.id} style={styles.todo}>
          <Text>
            {todo.id}. {todo.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  todo: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});