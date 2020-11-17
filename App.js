import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';


import Screen from './app/componets/Screen';
import AppPicker from './app/componets/AppPicker';


export default function App() {
  const categories = [
    {
      label: "Furniture",
      value: 1
    },
    {
      label: "Clothing",
      value: 2
    },
    {
      label: "Cameras",
      value: 3
    }
  ]

  const [category, setCategory] = useState(categories[0])


  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder="email"
        icon="apps" />
    </Screen>


  );
}



