import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Screen from '../componets/Screen';
import colors from '../config/colors';
import ListItem from '../componets/ListItem';

function MyAccountScreen(props) {
    return (

        <Screen>
            <View>
                <ListItem
                    title="Mosh"
                    subTitle="Mosh@gmail.com"
                    image={require('../assets/mosh.jpg')}
                    style={styles.item}
                />
            </View>
           
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        flex: 1,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    item: {

    },
    userInfo: {
        height: 50,
        width: "100%",
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "row",
        paddingLeft: 10,
        margin: 20,
    }
})

export default MyAccountScreen;