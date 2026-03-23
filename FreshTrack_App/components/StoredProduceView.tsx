import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { StoredProduce } from "@/typeScriptComponents/StoredProduce";
import produceType  from "../assets/produceType.json"
import useFridge from '@/typeScriptComponents/UseFridge'
import {useRouter} from 'expo-router'
interface Props{
    item : StoredProduce;
    switchedCardId: number;
    switchCard: () => void;
    setUpdated: () => void;
}
export default function StoredProduceView({ item, switchedCardId, switchCard, setUpdated } : Props) {
    const router = useRouter();
    const dummyProduceType = {name: "unknown", category: "unknown", bestByDays : 0}
    const produceTypeRelated = (produceType.produce.find(produceType => produceType.id === item.produceTypeId) || dummyProduceType)
    const { items, setItems, add, remove, update } = useFridge();
    const [hidden, setHidden] = useState(false);
    const [changed, setChanged] = useState(false);
    if (hidden) return null;
    if(switchedCardId == item.id){
      return(
        <View>
          <Text>Switched id: {item.id}</Text>
          <Button title="Delete the whole thing" onPress={async ()=>{setHidden(true) ; await remove(item.id)}}/>
          <Button title="Delete 1 from quantity" onPress={async ()=>{await update(item.id, item.produceCount - 1); setUpdated(); setChanged(!changed); }}/>
        </View>
      )
    }
    else return (
    <Pressable onPress={()=> {switchCard()}}>
    <View style={styles.card}>
      <Text style={styles.name}>{produceTypeRelated?.name}</Text>
      <Text>Category: {produceTypeRelated?.category}</Text>
      <Text>Quantity: {item.produceCount} </Text>
      <Text>Added: {item.addedAt}</Text>
      <Text>Will expire by {item.addedAt + (produceTypeRelated.bestByDays * 24*60*60*1000)}</Text>
      <Text>Days left before expiration: {(item.addedAt + (produceTypeRelated.bestByDays * 24*60*60*1000) - Date.now())/1000/60/60/24}</Text>
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