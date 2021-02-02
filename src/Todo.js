import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export const Todo = ({ todo, deleteTodo, toggleDone }) => {
  const deleteTodoId = () => {
    deleteTodo(todo.id);
  };

  return (
    <TouchableOpacity
      onPress={() => toggleDone(todo.id)}
      onLongPress={deleteTodoId}
      activeOpacity={0.5}
    >
      <View style={styles.todoButtonBlock}>
        <Text style={!todo.done ? styles.text1 : styles.text2}>
          {todo.title}
        </Text>
        <Button color="#4682b4" title="Уд." onPress={deleteTodoId} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoText: {
    width: '80%',
    fontSize: 17,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 5,
    padding: 4,
    margin: 10,
  },
  todoButtonBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 3,
  },
  text1: {
    color: `#000`,
    fontSize: 17,
  },
  text2: {
    textDecorationLine: 'line-through',
    color: `#000`,
    fontSize: 17,
  },
});
