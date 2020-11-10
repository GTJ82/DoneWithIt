import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from "react-native";


import AppButton from "./app/componets/AppButton";
import colors from './app/config/colors';

import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/componets/Card';
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (


    <View style={{
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100,
    }}>

      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />

    </View>


    // <WelcomeScreen />

  );
}



