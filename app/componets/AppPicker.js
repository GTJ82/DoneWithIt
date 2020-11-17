import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from '../componets/Screen';
import PickerItem from '../componets/PickerItem';


function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem, ...otherProps }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} size={20} color={colors.mediumGrey} name={icon} />}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons size={20} color={colors.mediumGrey} name="chevron-down" />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={items => items.value.toString()}
                        renderItem={({ item }) =>
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false)
                                    onSelectItem(item)
                                }

                                }
                            />
                        }
                    />
                </Screen>
            </Modal>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        padding: 10,
        width: "100%",
        marginVertical: 10,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        flex: 1,
    },
    icon: {
        marginRight: 10,
    }
})

export default AppPicker;