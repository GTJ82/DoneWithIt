import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.closeIcon} name="close" />
            <MaterialCommunityIcons name="trash-can-outline" />


            <Image
                resizeMode="contain"
                style={styles.image}
                source={props.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        
    },
    closeIcon: {
        width: 50,
        height: 50,
       
        position: "absolute",
        top: 50,
        left: 0,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 50,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;