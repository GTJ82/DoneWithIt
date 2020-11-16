import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';

function AppPicker({ icon, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={colors.mediumGrey} name={icon} />}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons size={20} color={colors.mediumGrey} name="chevron-down" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        padding: 10,
        width: "100%",
        marginVertical: 10,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        flex: 1,
    },
    icon: {
        marginRight: 10,
    }
})

export default AppPicker;