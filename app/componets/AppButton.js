import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors';

export default function AppButton({ type, onPress, color = "primary" }) {
    return (

        /* The TouchableOpacity takes all of the button styles. The backgroundColor will be overiden by the
         inline style given dynamically as shown below */
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.buttonText}>{type}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {

        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
        marginBottom: 10,
        
    },

    buttonText: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})
