import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from "../navigation/BottomTabNavigator"

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigator/>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})