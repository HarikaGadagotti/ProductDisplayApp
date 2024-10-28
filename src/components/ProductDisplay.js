import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductDisplay = () => {
  const [product] = useState({
    name: 'Sample Product',
    price: 1000,
    description: 'This is a sample product description.',
    imageUrl: 'https://example.com/sample.jpg',
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₹{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => {}} />
      <Button title="Buy Now" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: '100%', height: 200, resizeMode: 'contain' },
  name: { fontSize: 24, fontWeight: 'bold' },
  price: { fontSize: 20, color: 'green' },
  description: { fontSize: 16, marginVertical: 10 },
});

export default ProductDisplay;
