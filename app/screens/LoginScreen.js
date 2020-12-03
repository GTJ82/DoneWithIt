import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';


import AppTextInput from '../componets/AppTextInput';
import AppButton from '../componets/AppButton';
import ErrorMessage from '../componets/ErrorMessage';
import Screen from '../componets/Screen';



const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


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
                validationSchema={validationSchema}
            >

                {({ handleChange, handleSubmit, errors }) => (
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
                        <ErrorMessage error={errors.email} />
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
                        <ErrorMessage error={errors.password} />
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