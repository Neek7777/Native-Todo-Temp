import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';
import { GooglePlacesInput } from './src/GooglePlacesInput';
import { ShowTemperature } from './src/ShowTemperature';

export default function App() {
  const [newCity, setNewCity] = useState('');
  const [todos, setTodos] = useState([]);

  const addCity = (data) => {
    setNewCity(data);
  };

  const repointTodos = (title) => {
    newTodo = {
      id: Date.now().toString(),
      title: title,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    );
  };

  const deleteTodo = (id) => {
    const todo = todos.find((t) => id === t.id);
    Alert.alert(
      'Удаление задачи',
      `Вы действительно хотите удалить "${todo.title}"?`,
      [
        {
          text: 'Отмена',
        },
        {
          text: 'Удалить',
          onPress: () =>
            setTodos((prev) => prev.filter((item) => item.id !== id)),
        },
      ]
    );
  };

  return (
    <View>
      <Navbar title="TODO LIST APP" />
      <View style={styles.box}>
        <>
          <GooglePlacesInput addCity={addCity} />
          <ShowTemperature city={newCity} />
        </>
      </View>
      <View style={styles.container}>
        <AddTodo repointTodos={repointTodos} />
        <ScrollView>
          {todos
            .sort((a, b) => a.done - b.done)
            .map((todo) => {
              return (
                <Todo
                  todo={todo}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  toggleDone={toggleDone}
                />
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: 580,
  },
  header: {
    height: 40,
    width: '100%',
    backgroundColor: '#d3d3d3',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    height: 150,
    backgroundColor: '#3949ab',
  },
});
