import { StatusBar } from 'expo-status-bar';
import React from 'react';


import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Icon from './app/componets/Icon';
import Screen from './app/componets/Screen';


export default function App() {
  return (

    <Screen>
      <Icon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      />
    </Screen>

  );
}



