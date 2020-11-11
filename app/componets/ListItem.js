import React from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

export default function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGrey}
                onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
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

