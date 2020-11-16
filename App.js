import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';





import Screen from './app/componets/Screen';
import AppTextInput from './app/componets/AppTextInput';


export default function App() {



  return (
    <Screen>
      <AppTextInput 
      placeholder="email"
      icon="email"
      
      />
    </Screen>


  );
}



