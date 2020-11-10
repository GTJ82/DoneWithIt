import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'

export default function AppText({ children }) {
    return (

        <Text style={styles.text}>{children}</Text>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",


    }
})