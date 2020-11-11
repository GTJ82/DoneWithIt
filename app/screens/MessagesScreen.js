import React from 'react';
import { Flatlist } from 'react-native';

import ListItem from '../componets/ListItem';


const messages = [{
    id: 1,
    title: "T1",
    description: "D1",
    image: require('../assets/mosh.jpg')
},
{
    id: 2,
    title: "T2",
    description: "D2",
    image: require('../assets/mosh.jpg')
}]

function MessagesScreen(props) {
    return (
        <Flatlist
            data={messages}
            keyExtractor={message => messages.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                />
            }
        />
    );
}

export default MessagesScreen;