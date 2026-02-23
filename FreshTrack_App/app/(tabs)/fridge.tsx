import { StyleSheet, Text, View, Button, ListRenderItem, FlatList } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'
import useFridge from '@/typeScriptComponents/UseFridge'
import { StoredProduce } from '@/typeScriptComponents/StoredProduce'
import StoredProduceView from '@/components/StoredProduceView'

const Fridge = () => {
  const router = useRouter();
  const { items, add, remove, update } = useFridge();
  const renderItem: ListRenderItem<StoredProduce> = ({ item }) => (
      <StoredProduceView item={item} />)
  return (
    <View>
      <Text>fridge</Text>
            <FlatList
      data = {items}
      keyExtractor ={(item) => item.id.toString()}
      renderItem={renderItem} 
      />
      <Button title = {"Add produce to fridge"} onPress={()=> {router.push("/chooseProduce")}}/>
    </View>
  )
}


export default Fridge

const styles = StyleSheet.create({})