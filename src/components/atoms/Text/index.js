import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const CustomText = ({ children }) => {
    return(
        <Text style= {StyleSheet.titleText}>
            {children}
        </Text>
    )
}


const styles = StyleSheet.create({
    titleText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 12
    }
})