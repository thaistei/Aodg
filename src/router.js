import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import SignUp from './screens/SignUp';
import Home from './screens/Home';
import ProfilePet from './screens/ProfilePet'; 

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{
            headerTitle: () => (
              <Image source={require('../assets/LogoAdog.png')} style={{ width: 70, height: 70, marginBottom: 10 }} />
            ),
            headerStyle: {
              backgroundColor: '#212A75', 
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15}}>
                <Feather name="bell" size={24} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen
          name="profilepet"
          component={ProfilePet} 
          options={{
            headerTitle: () => (
              <Image source={require('../assets/LogoAdog.png')} style={{ width: 70, height: 70, marginBottom: 10 }} />
            ),
            headerStyle: {
              backgroundColor: '#212A75', 
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15}}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

