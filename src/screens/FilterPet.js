import React, { useState } from 'react';
import { View, Text, Button, Picker, Slider, StyleSheet, TouchableOpacity } from 'react-native';
import RadioButton from 'react-native-radio-button';
import { Feather, Ionicons } from '@expo/vector-icons';

const HeaderLogo = () => (
  <Image source={require('../../assets/LogoAdog.png')} style={styles.logo} />
);

const HeaderRightIcon = ({ name, onPress }) => (
  <TouchableOpacity style={styles.headerRight} onPress={onPress}>
    <Feather name={name} size={24} color="white" />
  </TouchableOpacity>
);



export default function PetFilter() {
  const [animalType, setAnimalType] = useState(null);
  const [gender, setGender] = useState(null);
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState(0);
  const [size, setSize] = useState(null);

  const handleSave = () => {
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o tipo de animal que procura*</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setAnimalType('cachorro')} style={[styles.button, animalType === 'cachorro' && styles.active]}>
          <Text>Cachorro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAnimalType('gato')} style={[styles.button, animalType === 'gato' && styles.active]}>
          <Text>Gato</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.title}>Sexo do pet (opcional)</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setGender('Macho')} style={[styles.button, gender === 'Macho' && styles.active]}>
          <Text>Macho</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('Femea')} style={[styles.button, gender === 'Femea' && styles.active]}>
          <Text>Fêmea</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Raças disponíveis</Text>
      <Picker
        selectedValue={breed}
        onValueChange={(itemValue) => setBreed(itemValue)}
        style={styles.picker}
      >
       
        <Picker.Item Text="Digite uma raça" value="" />
      </Picker>

      <Text style={styles.title}>Idade (de 0 a 20)*</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={20}
        step={1}
        value={age}
        onValueChange={(value) => setAge(value)}
      />
      <Text>Idade: {age} anos</Text>

      <Text style={styles.title}>Porte*</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setSize('P')} style={[styles.sizeButton, size === 'P' && styles.active]}>
          <Text>P</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSize('M')} style={[styles.sizeButton, size === 'M' && styles.active]}>
          <Text>M</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSize('G')} style={[styles.sizeButton, size === 'G' && styles.active]}>
          <Text>G</Text>
        </TouchableOpacity>
      </View>

      <Button title="Salvar" onPress={handleSave} style={styles.saveButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  active: {
    backgroundColor: '#add8e6',
  },
  picker: {
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sizeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#00f',
    color: '#fff',
  },
  
});