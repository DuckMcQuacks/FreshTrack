import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import produceType from "../../assets/produceType.json"
import useFridge from '@/typeScriptComponents/UseFridge'
import { StoredProduce } from '@/typeScriptComponents/StoredProduce'
import {useRouter} from 'expo-router'

const AddProduce = () => {

  const params = useLocalSearchParams<{ itemId?: string }>();
  const itemId = Number(params.itemId);

  const produce = useMemo(() => {
    if (!itemId) return null

    const id = Number(itemId)

    return produceType.produce.find(p => p.id === id) ?? null
  }, [itemId])
  
  const currentTime : Date = new Date();
  const produceToStore : StoredProduce = {
    id: 1,
    produceTypeId: itemId,
    produceCount: 1,
    addedAt: Date.now(),

  }

  const [produceCount, setProduceCount] = useState('1');
  const { items, add, remove, update } = useFridge();

  const router = useRouter();

  if (!produce) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Produce not found</Text>
      </View>
    )
  }

  return (

    <View style={{ padding: 16 }}>
      <Text>{produce.name}</Text>
      <Text>Added: {currentTime.getFullYear()}.{currentTime.getMonth()}.{currentTime.getDay()}    {currentTime.getHours()}:{currentTime.getMinutes()}</Text>
      <Text>Number of items:</Text>
      <TextInput 
      onChangeText = {newProduceCount=> setProduceCount(newProduceCount)}
      value = {produceCount}
      />
    <Button
      title="Add to Fridge"
      onPress={async () => {
      if (!itemId) return;
      
      const newItem: StoredProduce = {
        id: Date.now(), // simple unique id
        produceTypeId: produce.id,
        produceCount: Number(produceCount) || 1,
        addedAt: Date.now(),
    };

    await add(newItem);
    router.push("/fridge");
  }}
/>
    </View>
  )
}

export default AddProduce

const styles = StyleSheet.create({})