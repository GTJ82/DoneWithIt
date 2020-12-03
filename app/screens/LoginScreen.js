import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';


import AppFormField from '../componets/AppFormField';
import AppButton from '../componets/AppButton';
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

                {({ handleSubmit }) => (
                    <>
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