import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router/build/hooks'

const produceGuide = () => {
const params = useSearchParams();
  const itemIdStr = params.get("itemId"); // string | null
  const itemId = itemIdStr ? Number(itemIdStr) : null;

  if (itemId === null) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Error: No item ID provided</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 16 }}>
      <Text>Editing produce with ID: {itemId}</Text>
    </View>
  );
}

export default produceGuide

const styles = StyleSheet.create({})