import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../AppText';
import colors from '/Users/joshmac/Sandbox/DoneWithIt/app/config/colors.js'

function ErrorMessage({ error, visible }) {

    if (!visible || !error) return null;

    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: colors.danger,
    }
})

export default ErrorMessage;