import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../componets/Screen';
import Card from '../componets/Card';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: "Red Jacket",
        price: "$100",
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: "Couch, in great condition!",
        price: "$1000",
        image: require('../assets/couch.jpg')
    },
]

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>

            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString} /* keyExtractor expects a string so must always convert id toString */
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={item.price}
                        image={item.image}

                    />
                }
            />

        </Screen>
    );
}

const styles = StyleSheet.create({


    screen: {
        padding: 20,
        backgroundColor: colors.lightGrey,
    }
})

export default ListingScreen;