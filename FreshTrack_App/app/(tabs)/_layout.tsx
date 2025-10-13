import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="fridge"
        options={{
          title: 'Fridge',
        }}
      />
      <Tabs.Screen
        name="produceGuide"
        options={{
          title: 'Guide',
        }}
      />
            <Tabs.Screen
        name="recipes"
        options={{
          title: 'Recipes',
        }}
      />
    </Tabs>
  );
}