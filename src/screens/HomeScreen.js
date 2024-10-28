// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [pincode, setPincode] = useState('');
  const [product, setProduct] = useState(''); // Replace with your product selection logic

  const handlePincodeChange = (input) => {
    setPincode(input);
  };

  const handleSubmit = () => {
    // Handle pincode submission
    console.log(`Selected product: ${product}, Pincode: ${pincode}`);
    // Implement logic to validate pincode and fetch delivery date
  };

  return (
    <View style={styles.container}>
      <Text>Select a Product:</Text>
      {/* Replace with your product selection component */}
      <TextInput
        style={styles.input}
        placeholder="Enter Product"
        onChangeText={setProduct}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={handlePincodeChange}
        keyboardType="numeric"
      />
      <Button title="Check Delivery Date" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
