import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from "react-native";


import Button from "./app/componets/Button";
import colors from './app/config/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/componets/Card';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <Card
      title="Red Jacket for sale!"
      subTitle="$100"
      />

      {/* <WelcomeScreen /> */}

      {/* <Button
      type="LOGIN"
      
      /> */}

    </View>
  );
}



