import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native"

import SignIn from './SignIn';

const SplashScreen = () => {

  const navigation = useNavigation();

  useFocusEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("signin");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={["#212A75", "#6F4875"]} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/LogoAdog.png')} style={styles.logo} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
});

export default SplashScreen;
