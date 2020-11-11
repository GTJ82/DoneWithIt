import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen({ image }) {
    return (
        <View style={styles.container}>

            <View style={styles.closeIcon} >
                <MaterialCommunityIcons name="close" color={colors.primary} size={35} />
            </View>

            <View style={styles.trashIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color={colors.secondary} size={35} />
            </View>


            <Image
                resizeMode="contain"
                style={styles.image}
                source={image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',

    },
    closeIcon: {
        position: "absolute",
        top: 50,
        left: 30,
    },
    image: {
        width: "100%",
        height: 700,
    },
    trashIcon: {
        position: "absolute",
        top: 50,
        right: 30,
    }
})

export default ViewImageScreen;