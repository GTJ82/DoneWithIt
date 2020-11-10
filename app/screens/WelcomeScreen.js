import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../componets/AppButton';



function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} blurRadius={10} source={require('../assets/background.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton type="login" />
                <AppButton type="register" color="secondary" />
            </View>

        </ImageBackground>

    )
};


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "100%",

    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    tagLine: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})


export default WelcomeScreen;