import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const BottomNavigation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="paw-outline" size={24} color="black" onPress={() => navigation.navigate('home')} />
      <Feather name="search" size={24} color="black" />
      <Ionicons name="add-circle-outline" size={24} color="black" />
      <Ionicons name="star-outline" size={24} color="black" />
      <Feather name="menu" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

export default BottomNavigation;
