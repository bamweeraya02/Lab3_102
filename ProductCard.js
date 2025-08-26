import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ id, name, price, stock, cate, pic }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pic }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text>หมวดหมู่: {cate}</Text>
        <Text>คงเหลือ: {stock} ชิ้น</Text>
        <Text style={styles.price}>฿{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5
  }
});

export default ProductCard;
