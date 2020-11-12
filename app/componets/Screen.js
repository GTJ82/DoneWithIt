import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';


/* This componet will solve the problem with the tops of differnet user devices.
We can apply it as the outer container on every screen. */
function Screen({ children }) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    /* This sets the paddingTop to the appropriate amount dependong on 
    the type of device being used. It will always clear the notch and status bars. */
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen;