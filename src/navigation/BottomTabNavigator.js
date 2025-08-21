import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppRoutes from './routes';
import NativeStackNavigator from './StackNavigator';
import OrdersScreen from '../screens/orders';
import FavoritesScreen from '../screens/favorites';
import ProfileScreen from '../screens/profile';
import TabIcons from './tabIcon';



const BottomTabNavigator = () => {

    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabIcons route={route} focused={focused} />
        ),
        tabBarShowLabel: false,
        headerShown: false,
      })}>
 <Tab.Screen name={AppRoutes.TAB} component={NativeStackNavigator} />
      <Tab.Screen name={AppRoutes.ORDERS} component={OrdersScreen} />
      <Tab.Screen name={AppRoutes.FAVORITES} component={FavoritesScreen} />
      <Tab.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})