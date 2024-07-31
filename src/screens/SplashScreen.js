import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native"

const SplashScreen = () => {

   const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("SignIn");
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (

        <LinearGradient colors={["#212A75", "#6F4875"]} style={styles.container}>
            <View>
                <Image source={require('../../assets/LogoAdog.png')} style={styles.logo} />
            </View>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
    },

});

export default SplashScreen;