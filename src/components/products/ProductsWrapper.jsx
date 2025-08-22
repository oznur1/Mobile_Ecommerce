import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from "../../components/loader/index"
import Error from "../../components/error/index"
import ProductsCard from "../products/ProductCard"
import AppStyles from '../../ui/appStyles'

const ProductsWrapper = () => {

  const { products, loading, error } = useSelector(state => state.products);

   return (
    <View>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        
       <View style={AppStyles.productsWrapper}>
        {products.map(item=>(
            <ProductsCard item={item} key={item.id}/>
        ))}
       </View>
      )}
    </View>
  );
}  
export default ProductsWrapper

