import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useLocalSearchParams } from 'expo-router'
import produceType from "../../assets/produceType.json"
import { ProduceType } from '@/typeScriptComponents/ProduceType'

const ProduceGuide = () => {

  const { itemId } = useLocalSearchParams<{ itemId?: string }>()

  const produce = useMemo(() => {
    if (!itemId) return null

    const id = Number(itemId)

    return produceType.produce.find(p => p.id === id) ?? null
  }, [itemId])

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
      <Text>{}</Text>
    </View>
  )
}

export default ProduceGuide

const styles = StyleSheet.create({})