import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppRoutes from './routes';
import HomeScreen from '../screens/home';
import ProductDetail from '../screens/detail';
import CartScreen from '../screens/cart';


const StackNavigator = () => {

    const Stack=createNativeStackNavigator();
  return (
   
   <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
<Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />
      <Stack.Screen name={AppRoutes.DETAIL} component={ProductDetail} />
      <Stack.Screen name={AppRoutes.CART} component={CartScreen} />
   </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})