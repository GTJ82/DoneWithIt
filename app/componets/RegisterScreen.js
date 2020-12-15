import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from './Screen';
import { AppFormField, SubmitButton, AppForm } from '../componets/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ email: "", password: "", name: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField
                    autoCapatilize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                />

                <AppFormField
                    autoCapatilize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapatilize="none"
                    autoCorrect={false}
                    icon="lock"
                    keyboardType="email-address"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton 
                title="register"
                />

            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})

export default RegisterScreen;