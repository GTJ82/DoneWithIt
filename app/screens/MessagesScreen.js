import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';


import ListItem from '../componets/ListItem';
import ListItemDeleteAction from '../componets/ListItemDeleteAction';
import ListItemSeperator from '../componets/ListItemSeperator';
import Screen from '../componets/Screen';


const initialMessages = [{
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

    const [messages, setMessages] = useState(initialMessages);


    const handleDelete = (message) => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected!", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                }
                ItemSeparatorComponent={ListItemSeperator}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})

export default MessagesScreen;

