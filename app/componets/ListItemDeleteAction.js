import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {

    return (

        /* This is a container that is rendered when the user swipes left on a message */
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress}>
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color={colors.white}
                />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default ListItemDeleteAction;