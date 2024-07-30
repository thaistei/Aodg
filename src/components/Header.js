import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const Header = () => {
    return (
    <View style={styles.header}>
        <Image source={require('../../assets/LogoAdog.png')} style={styles.logo} />
        <TouchableOpacity style={styles.bellIcon}>
            <Feather name="bell" size={24} color="white" />

        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#212A75',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: 15,
    },
    logo: {
        width: 70,
        height: 70,
    },
    bellIcon: {
        marginRight: 15,
    },
});

export default Header;