import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#3949ab',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
