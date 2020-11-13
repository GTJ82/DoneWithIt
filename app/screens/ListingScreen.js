import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../componets/Screen';

const listings = [
    {
        id: 1,
        title: "Red Jacket",
        price: 100,
        image: require('../assets/jacket.jpg')

    }
]

function ListingScreen(props) {
    return (
       <Screen>
           <FlatList 
           data={listings}
           />
       </Screen>
    );
}

export default ListingScreen;