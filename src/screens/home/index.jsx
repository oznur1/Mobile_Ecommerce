
import React from 'react'
import Header from '../../components/header';
import Banner from "../../components/banner"
import Products from "../../components/products"
import { ScrollView } from 'react-native';
import AppStyles from '../../ui/appStyles';


const HomeScreen  = () => {
  return (
    <ScrollView style={AppStyles.container}>
     <Header/>

     <Banner />

     <Products/>
    </ScrollView>
  )
}

export default HomeScreen 

