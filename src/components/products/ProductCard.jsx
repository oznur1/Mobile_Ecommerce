import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AppColors from '../../ui/appColors';
import AppStyles from '../../ui/appStyles';
import { Heart } from 'iconsax-react-nativejs';


const ProductCard = ({ item }) => {
  return (
    <View style={AppStyles.productCard}>
      {/* Image */}
      <Image source={{ uri: item.images[0] }} style={AppStyles.productImage} />

      {/* Favorite Icon */}
      <TouchableOpacity style={AppStyles.favoriteIcon}>
        <Heart size="20" color={AppColors.white} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={AppStyles.productTitle}>{item.title}</Text>
      {/* Brand */}
      <Text style={AppStyles.productBrand}>{item.brand}</Text>
      {/* Price */}
      <Text style={AppStyles.productPrice}>${item.price}</Text>
    </View>
  );
};

export default ProductCard;

