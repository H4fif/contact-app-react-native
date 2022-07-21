import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import macbookPro from '../../assets/images/macbook-pro.jpg';

const Index = ({ onButtonPress }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={macbookPro} style={styles.imageProduct} />

      <Text style={styles.productName}>Used Macbook Pro</Text>

      <Text style={styles.productPrice}>Rp. 25.000.000</Text>

      <Text style={styles.location}>Bandung</Text>

      <TouchableOpacity onPress={onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: { width: 188, height: 107 },
  productName: { fontSize: 14, fontWeight: 'bold', marginTop: 16 },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  buttonWrapper: {
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
