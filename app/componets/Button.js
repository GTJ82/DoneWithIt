import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import colors from '../config/colors';

export default function Button(props) {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.type}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    button: {
        height: 40,
        width: "100%",
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,        
    },

    buttonText: {
        color: colors.white,
     }
})
