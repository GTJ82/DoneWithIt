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


    <ViewImageScreen
      image={require("./app/assets/chair.jpg")}
    />




  );
}



