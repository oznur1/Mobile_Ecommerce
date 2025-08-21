import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Bag2 } from 'iconsax-react-nativejs';


const Header = () => {
  return (
    <SafeAreaView>
      <View>
       
        <Text>Hi ,Yusuf</Text>
        <Text>Let's go shopping</Text>
      </View>

      <View>
     <Bag2/>
      </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({})