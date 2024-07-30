import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn'; // Certifique-se de ter esse import
import Home from './screens/Home';
import ProfilePet from './screens/ProfilePet'; 
import Nots from './screens/Notfications'
import { HeaderLogo, HeaderRightIcon } from './components/HeaderComponents'; // Ajuste o caminho conforme necessário

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerTitle: () => <HeaderLogo />,
  headerStyle: {
    backgroundColor: '#212A75',
  },
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen 
          name="signup" 
          component={SignUp} 
        />
        <Stack.Screen 
          name="signin" 
          component={SignIn} 
        />
        <Stack.Screen 
          name="home" 
          component={Home} 
          options={{
            headerRight: () => <HeaderRightIcon name="bell" onPress={() => {}} />,
          }}
        />
        <Stack.Screen 
          name="notifications" 
          component={Nots} 
          options={{
            headerRight: () => <HeaderRightIcon name="bell" onPress={() => {}} />,
          }}
        />
        <Stack.Screen
          name="profilepet"
          component={ProfilePet} 
          options={{
            headerRight: () => <HeaderRightIcon name="arrow-back" onPress={() => {}} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;


