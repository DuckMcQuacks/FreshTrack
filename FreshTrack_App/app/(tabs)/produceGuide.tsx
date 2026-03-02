import { FlatList, StyleSheet, Text, View, ListRenderItem} from 'react-native'
import React from 'react'
import produceType  from "../../assets/produceType.json"
import ProduceGuide from "../../components/ProduceGuide"
import { ProduceType } from '@/typeScriptComponents/ProduceType'

const produceData = produceType as {produce: ProduceType[]};

const produceGuide = () => {
    const renderItem: ListRenderItem<ProduceType> = ({ item }) => (
    <ProduceGuide item={item} />
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

export default produceGuide

const styles = StyleSheet.create({})