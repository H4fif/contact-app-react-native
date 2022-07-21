import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Index = () => {
  const [totalProduct, setTotalProduct] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi komunikasi antar Component</Text>
      <Cart totalProduct={totalProduct} />
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { padding: 20 },
  textTitle: { textAlign: 'center' },
});
