import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, View } from 'react-native';


/* This componet will solve the problem with the tops of differnet user devices.
We can apply it as the outer container on every screen. */
function Screen({ children, style }) {
    return (

        /* Passing style as a prop will allow us to add additional styles to the Screen componet */
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
                {children}
            </View>
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