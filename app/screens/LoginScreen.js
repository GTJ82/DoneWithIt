import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native'

import Screen from '../componets/Screen';
import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/AppButton';


function LoginScreen(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput
                autoCapatilize="none"
                autoCorrect={false}
                keyboardType="email-address"
                icon="email"
                onChangeText={text => setEmail(text)}
                placeholder="email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapatilize="none"
                autoCorrect={false}
                icon="lock"
                keyboardType="email-address"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton
                style={styles.button}
                type="Login"
                onPress={() => console.log(email, password)}
            />

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,

    }
})
export default LoginScreen;