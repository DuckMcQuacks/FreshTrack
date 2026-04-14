import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button, Image } from "react-native";
import { StoredProduce } from "@/typeScriptComponents/StoredProduce";
import produceType from "../assets/produceType.json";
import { useRouter } from 'expo-router';
import CardStyles from '../styles/cardStyles';
import { useCountdown } from '@/typeScriptComponents/UseCountdown';

interface Props {
  item: StoredProduce;
  switchedCardId: number;
  switchCard: () => void;
  onRemove: (id: number) => Promise<void>;
  onUpdate: (id: number, quantity: number) => Promise<void>;
}

export default function StoredProduceView({item, switchedCardId, switchCard, onRemove, onUpdate}: Props) {
  const router = useRouter();

  const dummyProduceType = { name: "unknown", category: "unknown", bestByDays: 0 };
  const produceTypeRelated = produceType.produce.find(produceType => produceType.id === item.produceTypeId) || dummyProduceType;

  const addedDate : Date = new Date(item.addedAt)

const expiryDate: Date = new Date(
  item.addedAt + produceTypeRelated.bestByDays * 86400000
);

const { days, hours, minutes, seconds } = useCountdown(expiryDate);
  const pad = (n: number) => n.toString().padStart(2, '0');

  if (switchedCardId === item.id) {
    return (
      <View style={CardStyles.card}>
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
        <Button title = "GUIDE" onPress={()=> {router.push(`/detailedGuide?itemId=${item.produceTypeId}`);}}/>
      </View>
    );
  }

  return (
    <Pressable onPress={switchCard}>
      <View style={CardStyles.card}>
        <Image style={CardStyles.image} source = {require('@/assets/images/Apple.png')} />
        <View style={CardStyles.infoArea}>
          <View style = {CardStyles.spaceBetweenRow}>
            <Text style={CardStyles.name}>{produceTypeRelated.name}</Text>
            <Text>{addedDate.toLocaleDateString()}</Text>
          </View>
          <Text>Quantity: {item.produceCount}</Text>
          <Text>Will expire by {expiryDate.toLocaleDateString()}</Text>
          <Text>
            Days left before expiration: {days}d {pad(hours)}h {pad(minutes)}m
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
