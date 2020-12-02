import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik';

import Screen from '../componets/Screen';
import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/AppButton';


function LoginScreen(props) {

    return (


        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
            >

                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapatilize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            icon="email"
                            onChangeText={handleChange("email")}
                            placeholder="email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapatilize="none"
                            autoCorrect={false}
                            icon="lock"
                            keyboardType="email-address"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton
                            style={styles.button}
                            type="Login"
                            onPress={handleSubmit}
                        />
                    </>

                )}

            </Formik>


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