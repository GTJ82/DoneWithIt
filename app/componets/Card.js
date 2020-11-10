import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from "../config/colors";

export default function Card(props) {
    return (

        <View style={styles.card}>
            <Image style={styles.image} source={require("../assets/jacket.jpg")} />
            <View style={styles.bottomCard}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    bottomCard: {
        backgroundColor: colors.white,
        height: 75,
        width: 350,
        justifyContent: "center",
        
    },
    card: {
        backgroundColor: "#F5F5F5",
        height: "50%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        
    },
    image: {
        height: 300,
        width: 350,

    },
    subTitle: {
        margin: 5,
        marginLeft: 20,
    },
    title: {
        margin: 5,
        marginLeft: 20,
    }
})