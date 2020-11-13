import React from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight, ImageBackground } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

export default function ListItem({ title, subTitle, image, onPress, IconComponet, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGrey}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponet}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
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
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
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

