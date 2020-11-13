import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../componets/Screen';
import colors from '../config/colors';
import ListItem from '../componets/ListItem';
import Icon from '../componets/Icon';
import ListItemSeperator from '../componets/ListItemSeperator';


const menuItem = [{
    title: "My Listings",
    icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary
    }
},
{
    title: "My Messages",
    icon: {
        name: "email",
        backgroundColor: colors.secondary
    }
}
]

function MyAccountScreen(props) {
    return (

        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh"
                    subTitle="Mosh@gmail.com"
                    image={require('../assets/mosh.jpg')}
                    style={styles.item}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItem}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponet={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                    ItemSeparatorComponent={ListItemSeperator}
                />
            </View>
            <View style={styles.container}>
                <ListItem 
                title="Logout"
                IconComponet={
                    <Icon name="logout" backgroundColor="#ffe66d"/>
                }
                />

            </View>
        </Screen>

    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: colors.white
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    item: {

    },
    screen: {
        backgroundColor: colors.lightGrey
    },
    userInfo: {
        height: 50,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 10,
        margin: 20,
    }
})

export default MyAccountScreen;