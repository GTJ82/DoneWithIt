import React from 'react';
import * as Yup from 'yup';

import Screen from './Screen';
import AppForm from './forms/AppForm';
import AppFormField from './forms/AppFormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    name: Yup.string().required().label("Name"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
        <Screen>
            <AppForm
                initialValues={{ email: "", password: "", name: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField
                    autoCapatilize="none"
                    autoCorrect={false}
                    icon="person"
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
                    placeholder="email"
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

            </AppForm>

        </Screen>
    );
}

export default RegisterScreen;