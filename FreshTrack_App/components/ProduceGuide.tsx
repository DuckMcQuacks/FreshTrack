import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ProduceType } from "../typeScriptComponents/ProduceType"
import {useRouter} from 'expo-router'
interface Props{
    item : ProduceType;
}
export default function ProduceGuide({ item } : Props) {
    const router = useRouter();
  return (
    <Pressable onPress={()=> {router.push(`/detailedGuide?itemId=${item.id}`);}}>
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Best within: {item.bestByDays} days</Text>
    </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 12
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  }
});