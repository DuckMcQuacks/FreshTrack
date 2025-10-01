import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
      <Link href={"/about"}>Hey Link</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`
  }
})