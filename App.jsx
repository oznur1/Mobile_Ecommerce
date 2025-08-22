import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider, useDispatch } from 'react-redux';
import store from "./src/store";
import { fetchProducts } from './src/store/slices/productsSlice';
import AppStyles from './src/ui/appStyles';
import { setCartItems } from './src/store/slices/cartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppContent = () => {
  
  // Dispacth kurulumu
  const dispatch = useDispatch();

  
  // Bileşen yüklendiğinde store'u güncelle
  useEffect(() => {
    // Api'dan alınan ürünleri store'a kayıt et
    dispatch(fetchProducts());

    const loadCart = async () => {
      // Locale'den ürünleri alsın
      const cartJSON = (await AsyncStorage.getItem('cart')) || [];
  
      // Locale'den alınan ürünleri JSON'dan js e çevirsin
      const cartItems = JSON.parse(cartJSON);
  
      console.log('CART', cartItems);
  
      // Sepetteki ürünleri store'a kayıt et
      dispatch(setCartItems(cartItems));
    };

 
  }, []);
  return (
    <SafeAreaView style={AppStyles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;