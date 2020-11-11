import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors';
import ListItem from '../componets/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>Red Jacket for sale!</Text>
                <Text style={styles.price}>$100</Text>

                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mosh Hamedani"
                        subTitle="5 Listings"
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    infoContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen;
