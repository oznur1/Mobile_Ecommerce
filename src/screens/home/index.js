import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header';
import Banner from "../../components//banner"



const HomeScreen  = () => {
  return (
    <View style={{backgroundColor:"white"}}>
     <Header/>

     <Banner />
    </View>
  )
}

export default HomeScreen 

