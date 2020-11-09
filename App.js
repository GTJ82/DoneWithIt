import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from "react-native";
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,

      }}
    >
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        borderWidth: 10,
        borderRadius: 50,
        borderColor: "royalblue",
      }}
      ></View>

    </View>
  );
}



