import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import PetCard from '../components/PetCard';
import BottomNavigation from '../components/BottomNavigation';


const notifications = [
  {
    nome: 'Logan',
    raca: 'Vira-lata',
    localizacao: 'Cataguases-MG',
    distance: '23 km',
    image: 'images.jpeg',
  },
];

const Nots = () => {
  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 15,
  },
});

export default Nots;