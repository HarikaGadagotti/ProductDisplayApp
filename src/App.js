import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as Papa from 'papaparse'; // Make sure to install papaparse

const App = () => {
  const [pincodes, setPincodes] = useState([]);
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const loadCSV = async () => {
      try {
        // Load CSV files
        const pincodeAsset = Asset.fromModule(require('./assets/data/pincodes.csv'));
        const productAsset = Asset.fromModule(require('./assets/data/products.csv'));
        const stockAsset = Asset.fromModule(require('./assets/data/stock.csv'));

        // Ensure assets are downloaded
        await Asset.loadAsync([pincodeAsset, productAsset, stockAsset]);

        // Read CSV files
        const pincodeData = await FileSystem.readAsStringAsync(pincodeAsset.uri);
        const productData = await FileSystem.readAsStringAsync(productAsset.uri);
        const stockData = await FileSystem.readAsStringAsync(stockAsset.uri);

        // Parse CSV data
        const parsedPincodes = Papa.parse(pincodeData, { header: true }).data;
        const parsedProducts = Papa.parse(productData, { header: true }).data;
        const parsedStocks = Papa.parse(stockData, { header: true }).data;

        // Update state
        setPincodes(parsedPincodes);
        setProducts(parsedProducts);
        setStocks(parsedStocks);
      } catch (error) {
        console.error("Error loading CSV files:", error);
      }
    };

    loadCSV();
  }, []);

  return (
    <View>
      <Text>Pincode Data: {JSON.stringify(pincodes)}</Text>
      <Text>Product Data: {JSON.stringify(products)}</Text>
      <Text>Stock Data: {JSON.stringify(stocks)}</Text>
    </View>
  );
};

export default App;
