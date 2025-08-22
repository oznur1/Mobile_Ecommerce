import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider, useDispatch } from 'react-redux';
import store from "./src/store";
import { fetchProducts } from './src/store/slices/productsSlice';
import AppStyles from './src/ui/appStyles';
const AppContent = () => {
  
  // Dispacth kurulumu
  const dispatch = useDispatch();

  
  // Bileşen yüklendiğinde store'u güncelle
  useEffect(() => {
    // Api'dan alınan ürünleri store'a kayıt et
    dispatch(fetchProducts());

 
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