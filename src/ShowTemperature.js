import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {API_URL2} from "@env"

export const ShowTemperature = ({ city }) => {
  const [temp, setTemp] = useState(undefined);

  temperatureRequest = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${API_URL2}`
      );
      const responseJson = await response.json();
      setTemp(~~responseJson.main.temp);
    } catch (error) {
      Alert.alert(error);
    }
  };
  useEffect(() => {
    if (city) {
      temperatureRequest();
    }
  }, [city]);

  return (
    <View style={styles.block}>
      <Text style={styles.temp}>{temp === undefined ? '' : ` t= ${temp} C`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '20%',
    height: 30,
  },
  temp: {
    backgroundColor: '#fff',
    margin: 5,
    width: '90%',
    height: 30,
    borderRadius: 5,
    paddingTop: 3,
    paddingLeft: 7,
    fontSize: 17,
    justifyContent: 'center',
    alignContent: 'center',
  },
});