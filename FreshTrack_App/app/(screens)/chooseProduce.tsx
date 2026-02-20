import { FlatList, StyleSheet, Text, View, ListRenderItem} from 'react-native'
import React from 'react'
import produceType  from "../../assets/produceType.json"
import ProducePick from "../../components/ProducePick"
import { ProduceType } from '@/typeScriptComponents/ProduceType'

const produceData = produceType as {produce: ProduceType[]};

const chooseProduce = () => {
    const renderItem: ListRenderItem<ProduceType> = ({ item }) => (
    <ProducePick item={item} />
  );
  return (
    <View>
      <FlatList
      data = {produceType.produce}
      keyExtractor ={(item) => item.id.toString()}
      renderItem={renderItem} 
      />
    </View>
  )
}

export default chooseProduce

const styles = StyleSheet.create({})