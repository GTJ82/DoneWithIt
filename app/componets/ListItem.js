import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

import colors from '../config/colors';

export default function ListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 30,


    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontWeight: "600",
        fontSize: 18,

    },
    subTitle: {
        color: colors.mediumGrey,
        fontSize: 18,
    }
})

