import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { StoredProduce } from "@/typeScriptComponents/StoredProduce";
import produceType from "../assets/produceType.json";
import { useRouter } from 'expo-router';

interface Props {
  item: StoredProduce;
  switchedCardId: number;
  switchCard: () => void;
  onRemove: (id: number) => Promise<void>;
  onUpdate: (id: number, quantity: number) => Promise<void>;
}

export default function StoredProduceView({
  item,
  switchedCardId,
  switchCard,
  onRemove,
  onUpdate
}: Props) {
  const router = useRouter();

  const dummyProduceType = { name: "unknown", category: "unknown", bestByDays: 0 };
  const produceTypeRelated =
    produceType.produce.find(produceType => produceType.id === item.produceTypeId) || dummyProduceType;


  if (switchedCardId === item.id) {
    return (
      <View>
        <Text>Items left: {item.produceCount}</Text>
        <Text>Switched id: {item.id}</Text>
        <Button title="DELETE" onPress={async () => {await onRemove(item.id);}} />
        <Button title="-1" onPress={async () => {
            if(item.produceCount <= 1){
              await onRemove(item.id)
            }
            else{
              await onUpdate(item.id, item.produceCount - 1);
            }
          }}
        />
        <Button
          title = "GUIDE"
          onPress={()=> {router.push(`/detailedGuide?itemId=${item.produceTypeId}`);}}/>
      </View>
    );
  }

  return (
    <Pressable onPress={switchCard}>
      <View style={styles.card}>
        <Text style={styles.name}>{produceTypeRelated.name}</Text>
        <Text>Category: {produceTypeRelated.category}</Text>
        <Text>Quantity: {item.produceCount}</Text>
        <Text>Added: {item.addedAt}</Text>
        <Text>Will expire by {item.addedAt + produceTypeRelated.bestByDays * 24 * 60 * 60 * 1000}</Text>
        <Text>
          Days left before expiration: {(item.addedAt + produceTypeRelated.bestByDays * 24 * 60 * 60 * 1000 - Date.now()) / 1000 / 60 / 60 / 24}
        </Text>
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