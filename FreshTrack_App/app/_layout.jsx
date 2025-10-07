import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (
        <Stack screenOptions={{
            headerStyle:{
                backgroundColor: '#dddddd',
            },
            headerTintColor: '#333'
        }}> 
            <Stack.Screen name="index" options={{title:'Home', headerShown: false}}/>
        </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})