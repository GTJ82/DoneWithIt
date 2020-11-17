import React from 'react';
import { Image, StyleSheet } from 'react-native'

import Screen from '../componets/Screen';
import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/AppButton';


function LoginScreen(props) {
    return (
        <Screen>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput
                autoCapatilize="none"
                autoCorrect={false}
                keyboardType="email-address"
                icon="email"
                placeholder="email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapatilize="none"
                autoCorrect={false}
                icon="lock"
                keyboardType="email-address"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton
                type="Login"
                onPress={() => console.log()}
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,

    }
})
export default LoginScreen;