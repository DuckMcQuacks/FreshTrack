import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import produceType from "../../assets/produceType.json"
import { ProduceType } from '@/typeScriptComponents/ProduceType'
import storedProduce from "../../assets/storedProduce.json"
import useFridge from '@/typeScriptComponents/UseFridge'

const addProduce = () => {

  const { itemId } = useLocalSearchParams<{ itemId?: string }>()

  const produce = useMemo(() => {
    if (!itemId) return null

    const id = Number(itemId)

    return produceType.produce.find(p => p.id === id) ?? null
  }, [itemId])
  
  const currentTime : Date = new Date();

  const [produceCount, setProduceCount] = useState('1');

  const { items, add, remove, update } = useFridge();

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
      defaultValue = {produceCount}
      />
      <Button
        onPress={() => {
        console.log('You tapped the button!');}}
        title="Add to Fridge"
/>
    </View>
  )
}

export default addProduce

const styles = StyleSheet.create({})