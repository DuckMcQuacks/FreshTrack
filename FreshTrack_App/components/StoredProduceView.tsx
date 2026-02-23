import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { StoredProduce } from "@/typeScriptComponents/StoredProduce";
import produceType  from "../assets/produceType.json"
import useFridge from '@/typeScriptComponents/UseFridge'
import {useRouter} from 'expo-router'
interface Props{
    item : StoredProduce;
}
export default function StoredProduceView({ item } : Props) {
    const router = useRouter();
    const dummyProduceType = {name: "unknown", category: "unknown", bestByDays : 0}
    const produceTypeRelated = (produceType.produce.find(produceType => produceType.id === item.produceTypeId) || dummyProduceType)
    const { items, add, remove, update } = useFridge();

    const [hidden, setHidden] = useState(false);
    if (hidden) return null;

    return (
    <Pressable onPress={()=> {router.push(`/addProduce?itemId=${item.id}`);}}>
    <View style={styles.card}>
      <Text style={styles.name}>{produceTypeRelated?.name}</Text>
      <Text>Category: {produceTypeRelated?.category}</Text>
      <Text>Quantity: {item.produceCount} </Text>
      <Text>Added: {item.addedAt}</Text>
      <Text>Will expire by {item.addedAt + (produceTypeRelated.bestByDays * 24*60*60*1000)}</Text>
      <Button title="Delete" onPress={async ()=>{setHidden(true) ; await remove(item.id)}}/>
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