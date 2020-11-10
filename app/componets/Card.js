import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from "../config/colors";

export default function Card({ image, title, subTitle }) {
    return (


        <View style={styles.card}>

            <Image style={styles.image} source={image} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

        </View>



    )
}

const styles = StyleSheet.create({
    card: {

        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    image: {
        height: 200,
        width: "100%",

    },
    infoContainer: {
        padding: 20,
    },
    subTitle: {
        padding: 5,
        color: colors.secondary,
        fontWeight: "bold",

    },
    title: {
        padding: 5,
        color: colors.black,
    }
})