import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';


import Screen from './app/componets/Screen';
import AppPicker from './app/componets/AppPicker';


export default function App() {



  return (
    <Screen>
      <AppPicker 
      placeholder="email"
      icon="apps" />
    </Screen>


  );
}



