import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';

export const AddTodo = ({ repointTodos }) => {
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task !== '') {
      repointTodos(task);
      setTask('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Поле с новой задачей должно быть заполнено');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setTask}
        value={task}
        placeholder="Введите новую задачу..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button color="#4682b4" title="Добавить" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    fontSize: 17,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#4682b4',
    padding: 8,
  },
});
