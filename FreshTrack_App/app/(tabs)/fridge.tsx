import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'

const fridge = () => {
  const router = useRouter();
  return (
    <View>
      <Text>fridge</Text>
      <Button title = {"Add produce to fridge"} onPress={()=> {router.push("/chooseProduce")}}/>
    </View>
  )
}


export default fridge

const styles = StyleSheet.create({})