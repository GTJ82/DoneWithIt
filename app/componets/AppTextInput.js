import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={colors.mediumGrey} name={icon} />}
            <TextInput
                style={defaultStyles.text}
                {...otherProps}
            />
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
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;