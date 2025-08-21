import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from "./src/navigation/AppNavigator"
import AppStyles from "./src/ui/appStyles"


const App = () => {
  return (
    <SafeAreaView style={AppStyles.container}>
   <AppNavigator/>
</SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})